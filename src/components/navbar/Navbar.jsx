import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  let userId = localStorage.getItem("userId");

  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  let deleteProfile = () => {
    let confirmation = confirm("Are You Sure?");
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/users/${userId}`)
        .then(() => {
          toast.success("Account Deleted!");
          localStorage.removeItem("userId");
          navigate("/register");
        })
        .catch(() => {
          toast.error("Something Went Wrong!");
        });
    }
  };

  return (
    <nav>
      <ul className={style.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {userId ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li onClick={logout}>Logout</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
