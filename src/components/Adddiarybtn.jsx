export default function AddDiaryBtn() {
    return (
      <button
        className="absolute btn btn-outline btn-accent right-6 top-4"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Add Diary
      </button>
    );
  }