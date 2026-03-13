const Header = () => {
  return (
    <header className="dashboard-header">
      <i className="fa-solid fa-bars menu-icon"></i>
      <h2>Dashboard</h2>
      <div className="user-avatar">
        <img
          src="https://ui-avatars.com/api/?name=James+Doe&background=eef2ff&color=4f46e5"
          alt="User"
        />
      </div>
    </header>
  );
};

export default Header;
