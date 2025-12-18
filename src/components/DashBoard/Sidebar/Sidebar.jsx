import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";

// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";

// User Menu

import Logo from "../../Shared/Logo/Logo";
import MenuItem from "./MenuItem/MenuItem";
import AdminMenu from "../../../Pages/Dashboard/Menu/AdminMenu";
import CustomerMenu from "../../../Pages/Dashboard/Menu/CustomerMenu";
import ChefMenu from "../../../Pages/Dashboard/Menu/ChefMenu";
import useRole from "../../../hooks/useRole";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const Sidebar = ({ isActive, setActive }) => {
  const [role, isLoading] = useRole();

  const { logOut } = useAuth();
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="bg-orange-50 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <Logo></Logo>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none "
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-orange-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          !isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div>
            {/* Logo */}
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto">
              <Link to="/">
                <Logo></Logo>
              </Link>
            </div>
          </div>

          {/* Middle Content */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/*  Menu Items */}

            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <nav>
                {role === "Customer" && (
                  <CustomerMenu setActive={setActive}></CustomerMenu>
                )}
                {role === "Admin" && (
                  <AdminMenu setActive={setActive}></AdminMenu>
                )}
                {role === "Chef" && (
                  <ChefMenu setActive={setActive}></ChefMenu>
                )}
              </nav>
            )}
          </div>

          {/* Bottom Content */}
          <div>
            <hr />

            <MenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />
            <button
              onClick={logOut}
              className="flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-200   hover:text-orange-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
