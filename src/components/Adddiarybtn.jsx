export default function AddDiaryBtn() {
  return (
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Add Diary
    </button>
  );
}
