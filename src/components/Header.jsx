const Header = () => {
  return (
    <header className="navbar bg-base-100 bg-neutral text-neutral-content p-10 flex ">
  <div className="navbar-start w-3/4">
    <img className="sm:m-0" width="50" height="50" src="https://img.icons8.com/?size=50&id=2025&format=png&color=a6adbb" alt="pen"/>
    <p className="ml-5 text-3xl sm:text-5xl align-center font-allura">Personal Diary</p>
  </div>
  <div className="navbar-end w-1/4 ">
    <a className="btn">New Dairy</a>
  </div>

    </header>
  );
};

export default Header;
