export default function AddDiaryBtn({id}) {
  return (
    <button
      className="fixed z-50 btn btn-outline btn-accent top-4 right-4"
      onClick={() => document.getElementById(id).showModal()}
    >
      Add Diary
    </button>
  );
}
