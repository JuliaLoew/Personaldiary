import Diary from "./Diary";
import { useState } from "react";

const Diaries = () => {

    // test data
  const diaryData = [
    {
      title: "My first diary",
      entry: "This is my first diary entry",
      date: "2021-09-01",
      id: 1,
    },
    {
      title: "My second diary",
      entry: "This is my second diary entry",
      date: "2021-09-01",
      id: 2,
    },
    {
      title: "My third diary",
      entry: "This is my third diary entry",
      date: "2021-09-01",
      id: 3,
    },
  ];

  localStorage.setItem("Diary", JSON.stringify(diaryData));

  const [diaries, setDiary] = useState(() => {
    const saved = localStorage.getItem("Diary");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  console.log(diaries);
  return (
    <div className="flex p-10 gap-10 flex-wrap justify-center">
      {diaries.map((item) => (
        <Diary
          key={item.id}
          item={item}
          title={item.title}
          entry={item.entry}
          date={item.date}
        />
      ))}
    </div>
  );

  
};

export default Diaries;
