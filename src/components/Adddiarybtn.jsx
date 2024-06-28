export default function AddDiaryBtn({id}) {
  return (
    <button
      className="fixed z-50 text-gray-300 btn btn-outline"
      onClick={() => document.getElementById(id).showModal()}
    >
      Add Diary
    </button>
  );
}
