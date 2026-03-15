import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LogOut, ChevronDown } from "lucide-react";
import "../styles/userMenu.css";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".user-menu-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="user-menu-container">
      <div className="avatar-wrapper" onClick={toggleDropdown}>
        <img
          src={user?.avatar || "https://ui-avatars.com/api/?name=User"}
          alt="Profile"
          className="avatar-img"
        />
        <ChevronDown size={14} className={`arrow ${isOpen ? "rotate" : ""}`} />
      </div>

      {isOpen && (
        <div className="profile-dropdown">
          <div className="dropdown-header">
            <p className="user-name">{user?.name || "User Name"}</p>
            <p className="user-email">{user?.email || "email@example.com"}</p>
          </div>

          <div className="dropdown-divider"></div>

          <ul className="dropdown-links">
            <li className="logout-link" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
