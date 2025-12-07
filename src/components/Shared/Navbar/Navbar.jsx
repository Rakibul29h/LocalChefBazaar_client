import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";
import Logo from "../Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import { ScaleLoader } from "react-spinners";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();

  const userBtn = (
    <>
      <div className="dropdown dropdown-center">
        <div tabIndex={0} role="button" className=" m-1">
          <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-44 p-2 shadow-sm"
        >
          <li>
            <button
              onClick={logOut}
              className="hover:bg-orange-100 font-semibold"
            >
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary" : `hover:text-primary font-semibold`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/meals"
        className={({ isActive }) =>
          isActive ? "text-primary" : `hover:text-primary font-semibold`
        }
      >
        Meals
      </NavLink>
      {user && (
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-primary" : `hover:text-primary font-semibold`
          }
        >
          Dashboard
        </NavLink>
      )}
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-8 text-lg">{links}</ul>
          </div>
          <div className="navbar-end">
            {
            loading?<ScaleLoader size={23} color='orange' />:
            user ?userBtn : (
              <Link to="/login" className="custom_btn">
                Log In
              </Link>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
{
  /* <button onClick={logOut}> LogOut</button> */
}
