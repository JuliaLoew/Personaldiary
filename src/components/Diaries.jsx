import Diary from "./Diary";
import { useEffect, useState } from "react";


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

  return (
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {diaries.map((item) => (
        <Diary
          key={item.id}
          item={item}
          title={item.title}
          entry={item.entry}
          date={item.date}
          img={item.imageURL}
        />
      ))}
    </div>
  );
};

export default Diaries;
