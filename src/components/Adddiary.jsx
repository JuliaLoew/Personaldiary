import AddDiaryBtn from "./Adddiarybtn.jsx";
export default function AddDiary() {
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
                placeholder="Please write your Title here"
              />
            </label>{" "}
            <br />
            <label className="flex items-center gap-2 input input-accent">
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
            >
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}