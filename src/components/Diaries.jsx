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

  // Set up an interval to check for updates in localStorage
  const intervalId = setInterval(() => {
    getDiaryEntries();
  }, 3000); // check every second

  // Clean up the interval on component unmount
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
