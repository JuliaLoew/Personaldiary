import Diary from "./Diary";
import { useEffect, useState } from "react";

const fallbackImageURL = 'https://placehold.co/600x400?text=Kein+Bild+vorhanden';
const Diaries = () => {

  const [diaries, setDiary] = useState([]);

  const getDiaryEntries = () => {
    const saved = localStorage.getItem("diaryData");
    if (saved) {
      const parsedData = JSON.parse(saved);
      const sortedData = parsedData.sort((a, b) => b.id - a.id); // sortiert nach id=timestamp
      setDiary(sortedData);

  }
};

useEffect(() => {
  getDiaryEntries();

  const intervalId = setInterval(() => {
    getDiaryEntries();
  }, 3000); 

  return () => clearInterval(intervalId);
}, []);

const handleImageError = (event) => {
  event.target.src = fallbackImageURL;
  console.log("Image not found, fallback to placeholder image");
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
        />
      ))}
    </div>
  );
};

export default Diaries;
