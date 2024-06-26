import Diarydetails from "./Diarydetails";

const Diary = ({ item, title, date, entry, img, onError, onSave }) => {
 

  const handleCloseModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) {
      modal.close();
    }
  };

  const shortEntry = entry.substring(0, 70) + " ..."; // zeigt nur die ersten 70 zeiche in der card an


  return (
    <div className={`card glass w-80 ${item.id}`}>
      <figure>
        <img className="h-48 w-full object-cover" src={img} alt={title} onError={onError} />{" "}
      </figure>
      <div className="card-body">
        <p>{date}</p>
        <h2 className="card-title">{title}</h2>
        <p className="mb-2">{shortEntry}</p>
        <div className="card-actions justify-end">
          <button
            className="btn"
            onClick={() => document.getElementById(`${item.id}`).showModal()}
          >
            Full Diary
          </button>

          <dialog id={`${item.id}`} className="modal">
            
              <Diarydetails
                key={item.id}
                item={item}
                title={item.title}
                entry={item.entry}
                date={item.date}
                img={item.imageURL}
                onError={onError}
                onSave={onSave}
                onClose={() => handleCloseModal(item.id)}
              />
            
          </dialog>
        </div>
      </div>
    </div>
  );
};
export default Diary;
