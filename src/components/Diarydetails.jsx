import React, { useState } from "react";

const Diarydetails = ({ diaryContent }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(diaryContent);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = e => {
    setEditedContent({ ...editedContent, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Save:", editedContent);

    // Update local storage
    const storedDiaryArray = localStorage.getItem("Diary");
    const diaryArray = storedDiaryArray ? JSON.parse(storedDiaryArray) : [];
    const updatedArray = diaryArray.map(entry =>
      entry.id === editedContent.id ? editedContent : entry
    );
    localStorage.setItem("Diary", JSON.stringify(updatedArray));

    setIsEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto border border-gray-300 rounded-lg shadow-lg p-4 bg-white">
      <div className="flex justify-center items-center mb-4">
        <img
          className="mr-4"
          width="500"
          height="500"
          src={editedContent.img || "https://via.placeholder.com/500"}
          alt="Bild"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedContent.title}
            onChange={handleChange}
            className="text-blue-900 font-bold text-xl flex justify-center items-center p-4"
          />
          <textarea
            name="entry"
            value={editedContent.entry}
            onChange={handleChange}
            className="text-sm leading-relaxed w-full h-40 border border-gray-300 rounded-lg p-2"
          />
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </>
      ) : (
        <>
          <h1 className="text-blue-900 font-bold text-xl flex justify-center items-center p-4">
            {editedContent.title || "Kein Titel"}
          </h1>
          <div className="text-sm leading-relaxed">
            {editedContent.entry || "Kein Inhalt"}
          </div>
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default Diarydetails;
