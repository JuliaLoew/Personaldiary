import React, { useState, useEffect } from "react";

const Diarydetails = ({ title, date, entry, img }) => {
  const initialDiaryContent = {
    title: "Erster Tag in Paris",
    date: "25.06.2024",
    content:
      "Heute war mein erster Tag in Paris und es war einfach unglaublich. Wir haben den Eiffelturm besucht und sind durch die malerischen Straßen von Montmartre geschlendert. Die Architektur hier ist atemberaubend, und das Essen ist einfach fantastisch. Ich kann es kaum erwarten, mehr von dieser wunderschönen Stadt zu entdecken!",
  };

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

  return (
    <div className="mx-auto max-w-xl rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
      <div className="mb-4 flex items-center justify-center">
        <img
          className="mr-4"
          width="500"
          height="500"
          src={img}
          alt="Bild"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      {isEditing ? (
        <input
          type="text"
          name="title"
          value={ title }
          onChange={handleChange}
          className="flex items-center justify-center p-4 text-xl font-bold text-blue-900"
        />
      ) : (
        <h1 className="flex items-center justify-center p-4 text-xl font-bold text-blue-900">
          {title}
        </h1>
      )}
      <div className="mb-2 text-sm font-bold">{date}</div>
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
        className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        onClick={isEditing ? handleSave : handleEdit}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default Diarydetails;
