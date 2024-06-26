import Diary from "./Diary";
import { useState } from "react";

const Diaries = () => {

    // test data
  const diaryData = [
    {
      title: "My first diary",
      entry: "This is my first diary entry",
      img: "https://placehold.co/600x400",
      date: "2021-09-01",
      id: 1,
    },
    {
      title: "My second diary",
      entry: "This is my second diary entry",
      img: "https://placehold.co/500x400",
      date: "2021-09-01",
      id: 2,
    },
    {
      title: "My third diary",
      entry: "This is my third diary entry",
      img: "https://placehold.co/600x800",
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
    <div className="flex flex-wrap justify-center gap-10 p-10">
      {diaries.map((item) => (
        <Diary
          key={item.id}
          item={item}
          title={item.title}
          entry={item.entry}
          date={item.date}
          img={item.img}
        />
      ))}
    </div>
  );

  
};

export default Diaries;
