import Diarydetails from "./Diarydetails";


const Diary = ({title, date, entry}) => {
  return (
    <div className="card glass w-80">
      <figure>
        <img src="https://placehold.co/600x400" alt="TITLE" />  {/* todo: replace alt with title from local storage */}
      </figure>
      <div className="card-body">
        <p>{ date }</p>
        <h2 className="card-title">{ title }</h2>
        <p className="mb-2">{entry}</p>
        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            open modal
          </button>
          <Diarydetails />
        </div>
      </div>
    </div>
  );
};
export default Diary;