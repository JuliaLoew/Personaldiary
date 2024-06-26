import Diarydetails from "./Diarydetails";


const Diary = ({title, date, entry, img}) => {
  return (
    <div className="card glass w-80">
      <figure>
        <img className="object-cover w-full h-48" src={img} alt="TITLE" />  {/* todo: replace alt with title from local storage */}
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