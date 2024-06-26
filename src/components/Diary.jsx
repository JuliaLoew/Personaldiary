import Diarydetails from "./Diarydetails";
import { useState } from "react";

const Diary = ({ item, title, date, entry, img }) => {
  const shortEntry = entry.substring(0, 70) + " ...";
  return (
    <div className={`card glass w-80 ${item.id}`}>
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
            onClick={() => document.getElementById(`${item.id}`).showModal()}
          >
            open modal
          </button>

          <dialog id={`${item.id}`} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <Diarydetails
                key={item.id}
                item={item}
                title={item.title}
                entry={item.entry}
                date={item.date}
                img={item.imageURL}
              />
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
export default Diary;
