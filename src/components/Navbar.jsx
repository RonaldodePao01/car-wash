import { NavLink } from "react-router-dom";
import { GlobalStateContext } from "../GlobalState";
import { useContext } from "react";

const Navbar = () => {
  // get user state from context
  const { user, updateUserDetails } = useContext(GlobalStateContext);
  return (
    <nav className=" flex flex-row justify-between mt-3 ">
      <div>
        <h1 className="pl-12 m-0 text-3xl xs:pl-5 ">
          Car
          <span className="text-blue-400">Wash</span>
        </h1>
      </div>
      <div>
        <ul className=" flex gap-8 pr-20 m-0 xs:gap-4 xs:pr-2">
          <li className="flex text-decoration-line:none text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400 underline" : "text-black"
              }
            >
              Home
            </NavLink>
          </li>

          {/* if user is not logged in "sign up" is displayed  else "log out" displayed*/}
          {user.details.name == null ? (
            <li className="flex text-decoration-line:none text-lg">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "text-blue-400 underline" : "text-black"
                }
              >
                Sign up
              </NavLink>
            </li>
          ) : (
            <>
              {/* log out button that updates state using updateUserDetails function to remove user data */}
              <li
                className="flex text-decoration-line:none text-lg"
                onClick={() =>
                  updateUserDetails({ name: null, email: null, password: null })
                }
              >
                {/* user logs out then is redirected to home page */}
                <NavLink to="/">Log out</NavLink>
              </li>
              {/* if user is logged in a "profile" nav item is displayed where they can view profile details */}
              {user.subscriptionFee ? (
                <li className="flex text-decoration-line:none text-lg">
                  <NavLink
                    to="/account"
                    className={({ isActive }) =>
                      isActive ? "text-blue-400  underline" : "text-black"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
              ) : (
                ""
              )}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
