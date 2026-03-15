import UserMenu from "./UserMenu";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="logo">
        <i className="fa-solid fa-circle-check"></i>
        <span>TaskFlow</span>
      </div>
      <h2>Dashboard</h2>
      <UserMenu />
    </header>
  );
};

export default Header;
