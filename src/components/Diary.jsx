import Diarydetails from "./Diarydetails";
import { useState } from "react";

const Diary = ({ title, date, entry, img }) => {

console.log("hallo" + img);
  const shortEntry = entry.substring(0, 70) + " ...";
  return (
    <div className="card glass w-80">
      <figure>
        <img className="h-48 w-full object-cover" src={img} alt="TITLE" />{" "}
        {/* todo: replace alt with title from local storage */}
      </figure>
      <div className="card-body">
        <p>{date}</p>
        <h2 className="card-title">{title}</h2>
        <p className="mb-2">{shortEntry}</p>
        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <Diarydetails />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
export default Diary;
