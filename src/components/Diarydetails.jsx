import React, { useState, useEffect } from "react";

const Diarydetails = ({ title, date, entry, img, onError }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [diaryContent, setDiaryContent] = useState(() => {
    // Abruf Daten local Storage
    const storedDiaryContent = localStorage.getItem("diaryData");
    return storedDiaryContent
      ? JSON.parse(storedDiaryContent)
      : initialDiaryContent;
  });

  useEffect(() => {
    // Speichern Änderung im Local Storage
    localStorage.setItem("diaryContent", JSON.stringify(diaryContent));
  }, [diaryContent]);

  const handleSave = () => {
    console.log("Änderungen gespeichert:", diaryContent);
    setIsEditing(false);
  };
  // Wechselt in den Bearbeitungsmodus
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    // Aktualisiert den Inhalt des Tagebucheintrags
    setDiaryContent({ ...diaryContent, [e.target.name]: e.target.value });

  };

  const closeWindow = () => {
    setIsVisible(false);
  }; 

  if (!isVisible) return null;

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-gray-300 bg-white p-4 shadow-lg">

<button className="btn btn-square btn-outline" onClick={closeWindow}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>


      
      <div className="mb-4 flex items-center justify-center">
        <img
          className="mr-4"
          width="500"
          height="500"
          src={img}
          onError={onError}
          alt="Bild"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {isEditing ? (
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          className="card-title flex items-center justify-center p-4"
        />
      ) : (
        <h1 className="card-title flex items-center justify-center p-4">
          {title}
        </h1>
      )}
      <div className="mb-4 text-sm font-bold">{date}</div>
      {isEditing ? (
        <textarea
          name="content"
          value={entry}
          onChange={handleChange}
          className="h-40 w-full rounded-lg border border-gray-300 p-2 text-sm leading-relaxed"
        />
      ) : (
        <div className="text-sm leading-relaxed">{entry}</div>
      )}
      <button
        className="btn btn-outline mt-3"
        onClick={isEditing ? handleSave : handleEdit}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Diarydetails;
