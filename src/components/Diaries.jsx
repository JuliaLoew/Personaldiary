import Diary from "./Diary";
import { useEffect, useState } from "react";

const fallbackImageURL =
  "https://placehold.co/600x400?text=Kein+Bild+vorhanden";
const Diaries = () => {
  const [diaries, setDiary] = useState([]);
  useEffect(() => {
    
      const saved = localStorage.getItem("diaryData");
      if (saved) {
        const parsedData = JSON.parse(saved);
        const sortedData = parsedData.sort((a, b) => b.id - a.id);
        setDiary(sortedData);
      }
  }, []);

  //FALLBACK IMAGE
  const handleImageError = (event) => {
    event.target.src = fallbackImageURL;
  };

  // Beim Speichern in Diarydetails werden die Localstorage Einträge aktualisiert
  const handleSave = (updatedEntries) => {
    setDiary(updatedEntries);
  };

  return (
    <div className="flex flex-wrap justify-center gap-10 p-10 sm:pb-40">
      {diaries.map((item) => (
        <Diary
          key={item.id}
          item={item}
          title={item.title}
          entry={item.entry}
          date={item.date}
          img={item.imageURL}
          onError={handleImageError}
          onSave={handleSave}
        />
      ))}
    </div>
  );
};

export default Diaries;
