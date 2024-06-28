import React, { useEffect, useState } from "react";

const Diarydetails = ({
  item,
  title,
  date,
  entry,
  img,
  onError,
  onSave,
}) => {
  
  const [diaries, setDiary] = useState({
    ...item,
    title,
    imageURL: img,
    entry,
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const storedEntries = JSON.parse(localStorage.getItem("diaryData")) || [];
    const updatedEntries = storedEntries.map((e) =>
      e.id === diaries.id ? diaries : e,
    );
    localStorage.setItem("diaryData", JSON.stringify(updatedEntries));
    console.log("Änderungen gespeichert:", updatedEntries);
    const sortedData = updatedEntries.sort((a, b) => b.id - a.id);
    setDiary(sortedData);
    onSave(updatedEntries);
    setIsEditing(false);
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
              value={diaries.imageURL}
              onChange={(e) =>
                setDiary({ ...diaries, imageURL: e.target.value })
              }
            />
            <input
              className="input input-bordered my-5 w-full"
              type="text"
              value={diaries.title}
              onChange={(e) =>
                setDiary({ ...diaries, title: e.target.value })
              }
            />

            <textarea
              className="textarea textarea-bordered mb-5 h-48 w-full"
              value={diaries.entry}
              onChange={(e) =>
                setDiary({ ...diaries, entry: e.target.value })
              }
            />
          </form>
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <img className="" src={img} alt={title} onError={onError} />
          <h2 className="card-title my-5">{title}</h2>
          <p className="my-5">{date}</p>
          <p className="mb-5">{entry}</p>
          <button className="btn" onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Diarydetails;

// OLD CODE

// import React, { useState, useEffect } from "react";

// const Diarydetails = ({ title, date, entry, img, onError }) => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isEditing, setIsEditing] = useState(false);
//   const [diaryContent, setDiaryContent] = useState(() => {
//     // Abruf Daten local Storage
//     const storedDiaryContent = localStorage.getItem("diaryData");
//     return storedDiaryContent
//       ? JSON.parse(storedDiaryContent)
//       : initialDiaryContent;
//   });

//   useEffect(() => {
//     // Speichern Änderung im Local Storage
//     localStorage.setItem("diaryContent", JSON.stringify(diaryContent));
//   }, [diaryContent]);

//   const handleSave = () => {
//     console.log("Änderungen gespeichert:", diaryContent);
//     setIsEditing(false);
//   };
//   // Wechselt in den Bearbeitungsmodus
//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleChange = (e) => {
//     // Aktualisiert den Inhalt des Tagebucheintrags
//     setDiaryContent({ ...diaryContent, [e.target.name]: e.target.value });

//   };

//   const closeWindow = () => {
//     setIsVisible(false);
//   }; 

//   if (!isVisible) return null;

//   return (
//     <div className="mx-auto max-w-xl rounded-lg border border-gray-300 bg-white p-4 shadow-lg">

// <button className="btn btn-square btn-outline" onClick={closeWindow}>
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M6 18L18 6M6 6l12 12" />
//   </svg>
// </button>


      
//       <div className="mb-4 flex items-center justify-center">
//         <img
//           className="mr-4"
//           width="500"
//           height="500"
//           src={img}
//           onError={onError}
//           alt="Bild"
//           style={{ maxWidth: "100%", height: "auto" }}
//         />
//       </div>
//       {isEditing ? (
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={handleChange}
//           className="card-title flex items-center justify-center p-4"
//         />
//       ) : (
//         <h1 className="card-title flex items-center justify-center p-4">
//           {title}
//         </h1>
//       )}
//       <div className="mb-4 text-sm font-bold">{date}</div>
//       {isEditing ? (
//         <textarea
//           name="content"
//           value={entry}
//           onChange={handleChange}
//           className="h-40 w-full rounded-lg border border-gray-300 p-2 text-sm leading-relaxed"
//         />
//       ) : (
//         <div className="text-sm leading-relaxed">{entry}</div>
//       )}
//       <button
//         className="btn btn-outline mt-3"
//         onClick={isEditing ? handleSave : handleEdit}
//       >
//         {isEditing ? "Save" : "Edit"}
//       </button>
//     </div>
//   );
// };

// export default Diarydetails;