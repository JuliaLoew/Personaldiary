import Diary from "./Diary";
import { useState } from "react";

const Diaries = () => {
  
  const [diaries, setDiary] = useState(() => {
    const saved = localStorage.getItem("diaryData");
    const initialValue = JSON.parse(saved);
    console.log(saved);
    return initialValue || [];
  });

  console.log(diaries);
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
