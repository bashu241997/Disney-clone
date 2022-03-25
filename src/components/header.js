import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./header.css";
import { useAuth } from "../App";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // update path to your firestore config

export default function Header() {
  const [User, setUser] = useState({});
  let navigate = useNavigate();
  const Auth = useAuth();
  useEffect(() => {
    const Data = sessionStorage.getItem("user");
    const _usr = JSON.parse(Data);
    setUser(_usr);
  }, []);

  const Singout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("credential");
        sessionStorage.removeItem("user");
        Auth.setUser(null);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const photo =
    User?.photoURL?.length > 3
      ? User.photoURL
      : "https://www.seekpng.com/png/small/966-9665493_my-profile-icon-blank-profile-image-circle.png";
  return (
    <>
      <nav className="navbar">
        <img alt="disney" src="/images/logo.svg" />
        <div>
          <NavLink
            to="/"
            className={(isActive) =>
              "navbutton_link" + (!isActive ? " unselected" : "")
            }
          >
            <img
              alt="disney"
              className="navbutton"
              src="/images/home-icon.svg"
            />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/watchlist"
            className={(isActive) =>
              "navbutton_link" + (!isActive ? " unselected" : "")
            }
          >
            <img
              alt="disney"
              className="navbutton"
              src="/images/watchlist-icon.svg"
            />
            <span>watchlist</span>
          </NavLink>
          <NavLink
            to="/originals"
            className={(isActive) =>
              "navbutton_link" + (!isActive ? " unselected" : "")
            }
          >
            <img
              alt="disney"
              className="navbutton"
              src="/images/original-icon.svg"
            />
            <span>originals</span>
          </NavLink>
          <NavLink
            to="/movies"
            className={(isActive) =>
              "navbutton_link" + (!isActive ? " unselected" : "")
            }
          >
            <img
              alt="disney"
              className="navbutton"
              src="/images/movie-icon.svg"
            />
            <span>movies</span>
          </NavLink>
          <NavLink
            to="/series"
            className={(isActive) =>
              "navbutton_link" + (!isActive ? " unselected" : "")
            }
          >
            <img
              alt="disney"
              className="navbutton"
              src="/images/series-icon.svg"
            />
            <span>series</span>
          </NavLink>
        </div>
        <img
          onClick={() => Singout()}
          alt="disney"
          className="userimg"
          src={photo}
        /><p className="signout">Click to signout</p>
      </nav>
      <Outlet />
    </>
  );
}
