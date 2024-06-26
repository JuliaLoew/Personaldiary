import AddDiary from "./Adddiary";

const Header = () => {
  return (
    <header className="navbar flex bg-base-100 bg-neutral px-10 py-5 text-neutral-content">
      <div className="navbar-start w-3/4">
        <img
          className="sm:m-0"
          width="50"
          height="50"
          src="https://img.icons8.com/?size=50&id=2025&format=png&color=a6adbb"
          alt="pen"
        />
        <p className="align-center font-allura ml-5 text-3xl sm:text-5xl">
          Personal Diary
        </p>
      </div>
      <div className="navbar-end w-1/4">
        <AddDiary />
      </div>
    </header>
  );
};

export default Header;
