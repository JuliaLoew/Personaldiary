export default function AddDiaryBtn() {
  return (
    <button
      className="btn btn-outline btn-accent"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Add Diary
    </button>
  );
}
