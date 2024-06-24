import AddDiaryBtn from "./AddDiaryBtn.jsx";
export default function AddDiary() {
  return (
    <>
      <AddDiaryBtn />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <label className="input input-accent mt-8 flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="title"
                placeholder="Please write your Title here"
              />
            </label>{" "}
            <br />
            <label className="input input-accent flex items-center gap-2">
              <input
                type="text"
                className="grow"
                name="image"
                placeholder="Please paste the image URL here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center">
              <textarea
                name="content"
                className="textarea textarea-accent mb-4 grow"
                placeholder="Please write your diary here"
              ></textarea>
            </label>
            <br />
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>{" "}
            <br />
            <button
              className="btn btn-outline btn-accent absolute bottom-4 right-6"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
