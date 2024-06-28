import React, { useState } from "react";

const Diarydetails = ({
  item,
  title,
  date,
  entry,
  img,
  onError,
  onSave,
  onClose,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({
    ...item,
    title,
    imageURL: img,
    entry,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryData")) || [];
    const updatedEntries = storedEntries.map((e) =>
      e.id === currentEntry.id ? currentEntry : e,
    );
    localStorage.setItem("diaryData", JSON.stringify(updatedEntries));
    onSave(updatedEntries);
    setIsEditing(false);
    onClose();
  };

  return (
    <div className="modal-box p-10">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
          ✕
        </button>
      </form>

      {isEditing ? (
        <div>
          <form>
            <input
              className="input input-bordered w-full"
              type="text"
              value={currentEntry.imageURL}
              onChange={(e) =>
                setCurrentEntry({ ...currentEntry, imageURL: e.target.value })
              }
            />
            <input
              className="input input-bordered my-5 w-full"
              type="text"
              value={currentEntry.title}
              onChange={(e) =>
                setCurrentEntry({ ...currentEntry, title: e.target.value })
              }
            />

            <textarea
              className="textarea textarea-bordered mb-5 h-48 w-full"
              value={currentEntry.entry}
              onChange={(e) =>
                setCurrentEntry({ ...currentEntry, entry: e.target.value })
              }
            />
          </form>
          <button className="btn" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <img className="" src={img} alt={title} onError={onError} />
          <h2 className="card-title my-5">{title}</h2>
          <p className="my-5">{date}</p>
          <p className="mb-5">{entry}</p>
          <button className="btn" onClick={handleEditClick}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Diarydetails;
