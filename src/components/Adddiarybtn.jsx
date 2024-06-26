export default function AddDiaryBtn() {
  return (
    <button
      className="fixed z-50 btn btn-outline btn-accent top-4 right-4"
      onClick={() => document.getElementById("my_modal_3").showModal()}
    >
      Add Diary
    </button>
  );
}
