import AddDiaryBtn from "./Adddiarybtn.jsx";
import { useState } from "react";

export default function AddDiary() {
  const [diary, setDiary] = useState({
    title: "",
    imageURL: "",
    entry: "",
  });

  const handleChangeDiary = (e) => {
    setDiary({
      ...diary,
      [e.target.name]: e.target.value,
    });
  };
  const addToLocalStorage = (key, value) => {
    let diariesData = JSON.parse(localStorage.getItem(key)) || [];
    let exitingDiary = diariesData.find((diary) => value.date == diary.date);
    const newData= {...value, id: Date.now(), date: new Date().toLocaleDateString()}
    let dataInLocalStorage = [...diariesData, newData];
    if (!exitingDiary && value.entry) {
      localStorage.setItem(key, JSON.stringify(dataInLocalStorage));
      setTimeout(() => {
        alert("Diary added successfully");
      }, 100);
    } else if (!value.entry) {
      alert("Please write your diary");
    } else {
      alert("Diary already exists");
    }
    reset();
    document.getElementById("my_modal_3");
  };

  const reset = () => {
    setDiary({
      title: "",
      imageURL: "",
      entry: "",
      id: "",
      date: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDiary({
      ...diary,
    });
    addToLocalStorage("diaryData", diary);
    reset();
    document.getElementById("my_modal_3").close();
  };

  return (
    <>
      <AddDiaryBtn id="my_modal_3" />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <label className="flex items-center gap-2 mt-8 input input-accent">
              <input
                type="text"
                className="grow"
                name="title"
                value={diary.title}
                onChange={handleChangeDiary}
                placeholder="Please write your Title here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center gap-2 input input-accent">
              <input
                type="text"
                className="grow"
                name="imageURL"
                value={diary.imageURL}
                onChange={handleChangeDiary}
                placeholder="Please paste the imageURL URL here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center">
              <textarea
                name="entry"
                className="mb-4 textarea textarea-accent grow"
                value={diary.entry}
                onChange={handleChangeDiary}
                placeholder="Please write your diary here"
              ></textarea>
            </label>
            <br />
            <button className="absolute btn btn-circle btn-ghost btn-sm right-2 top-2">
              ✕
            </button>{" "}
            <br />
            <button
              className="btn btn-outline btn-accent bottom-4 left-6"
              type="reset"
              onClick={reset}
            >
              Reset
            </button>
            <button
              className="absolute btn btn-outline btn-accent bottom-4 right-6"
              type="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}