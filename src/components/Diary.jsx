import React, { useState } from "react";
import Diarydetails from "./Diarydetails";

const Diary = ({ id, title, date, entry, img }) => {
  const [selectedDiaryContent, setSelectedDiaryContent] = useState(null);

  const handleOpenModal = () => {
    const storedDiaryArray = localStorage.getItem("diaryArray");
    const diaryArray = storedDiaryArray ? JSON.parse(storedDiaryArray) : [];
    const diaryContent = diaryArray.find(entry => entry.id === id) || { title: "", entry: "", img: "", date: "", id: "" };
    setSelectedDiaryContent(diaryContent);
    const modal = document.getElementById(`my_modal_${id}`);
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="card glass w-80">
      <figure>
        <img className="object-cover w-full h-48" src={img} alt={title} />
      </figure>
      <div className="card-body">
        <p>{date}</p>
        <h2 className="card-title">{title}</h2>
        <p className="mb-2">{entry}</p>
        <div className="card-actions justify-end">
          <button className="btn" onClick={handleOpenModal}>
            Open Modal
          </button>
          <dialog id={`my_modal_${id}`} className="modal">
            <div className="modal-box w-11/12">
              {selectedDiaryContent && <Diarydetails diaryContent={selectedDiaryContent} />}
              <button className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => document.getElementById(`my_modal_${id}`).close()}>
                Close
              </button>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Diary;
