import AddDiaryBtn from "./Adddiarybtn.jsx";
import { useState } from "react";

export function ExistingDiaryDataDialog() {
 return (
    <div className="text-white bg-black">
        You have already written a diary for today. Please try again tomorrow
    </div>
 )
}
export default function AddDiary() {
  const [diaries, setDiaries] = useState({
    title: "",
    imgUrl:"",
    entry: "",
  });
  const handleReset = () => {setDiaries({title: "", imgUrl:"", entry: ""})};
  
  function addDiaryToLocalStorage(key, value) {
    const diaryData = JSON.parse(localStorage.getItem(key)) || [];
    const existingDiaryData = diaryData.find((diary) => diary.date === value.date);
    if (!existingDiaryData) {
        const newDiaryData = [...diaryData, value];
        localStorage.setItem(key, JSON.stringify(newDiaryData));
       
    }else{
        alert("You have already written a diary for today. Please try again tomorrow");
    }
  }
  const handleSubmit = (e) => {
        e.preventDefault();
        setDiaries({
          ...diaries,
          [e.target.name]: e.target.value,
        });
        addDiaryToLocalStorage("diaryData", diaries);
        handleReset();
        document.getElementById("my_modal_3").close();
      };
  return (
    <>
      <AddDiaryBtn />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <label className="flex items-center gap-2 mt-8 input input-accent">
              <input
                type="text"
                className="grow"
                name="title"
                value={diaries.title}
                onChange={(e) => setDiaries({ ...diaries, title: e.target.value, id: Date.now(), date: new Date().toLocaleDateString()})} 
                placeholder="Please write your Title here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center gap-2 input input-accent">
              <input
                type="text"
                className="grow"
                name="imgUrl"
                value={diaries.imgUrl}
                onChange={(e) => setDiaries({ ...diaries, imgUrl: e.target.value })}
                placeholder="Please paste the image URL here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center">
              <textarea
                name="entry"
                value={diaries.entry}
                onChange={(e) => setDiaries({ ...diaries, entry: e.target.value })}
                className="mb-4 textarea textarea-accent grow"
                placeholder="Please write your diary here"
              ></textarea>
            </label>
            <br />
            <button className="absolute btn btn-circle btn-ghost btn-sm right-2 top-2">
              ✕
            </button>{" "}
            <br />
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