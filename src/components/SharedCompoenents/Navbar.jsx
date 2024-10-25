import { useState, useEffect, useRef } from "react";
import {
  faBars,
  faClose,
  faUser,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import hotelLogo from "../../assets/logos/aspenLogo.png";
import { useSelector, useDispatch } from "react-redux";
import {
  customerLogOut,
  fetchCustomerData,
} from "../../hotelManagement/redux/actions/customerActions";
import toast from "react-hot-toast";
import { GUEST_NAVBAR_ITEMS } from "../../hotelManagement/modules/constants";
import { HOTEL_NAME_HEADING } from "../../hotelManagement/modules/headings";

function Navbar() {
  const [hideMenu, setHideMenu] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.admin.customer.customerDetails);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Fetch customer data on component mount
  useEffect(() => {
    dispatch(fetchCustomerData());
  }, [dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    if (option === "Logout") {
      dispatch(customerLogOut());
      toast.success("Successfully logged out!");
    } else {
      console.log(option);
    }
    setDropdownOpen(false);
  };

  const DROPDOWN_OPTIONS = [
    { title: "My Bookings", action: () => handleOptionClick("My Bookings") },
    { title: "Profile", action: () => handleOptionClick("Profile") },
    { title: "Logout", action: () => handleOptionClick("Logout") },
  ];

  return (
    <header className="bg-white bg-opacity-90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo on the left */}
        <div
          className="flex pointer"
          title={HOTEL_NAME_HEADING}
          onClick={() => navigate("/")}
        >
          <img src={hotelLogo} alt="Hotel logo" className="w-14 h-14 mr-4" />
          <h2 className="text-2xl my-auto font-bold text-[#001f53]">
            {HOTEL_NAME_HEADING}
          </h2>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setHideMenu(!hideMenu)}
          className="lg:hidden focus:outline-none text-2xl"
        >
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>

        {/* Navigation on the right */}
        <nav
          className={`${
            hideMenu ? "hidden" : "block"
          } absolute top-16 left-0 w-full lg:static lg:block lg:w-auto ${!hideMenu ? "bg-white" : ""}`}
        >
          <ul className="flex flex-col  lg:flex-row lg:items-center lg:gap-6 font-bold">
            {GUEST_NAVBAR_ITEMS.map(({ title, path }) => (
              <li key={path} className="p-2 lg:p-0">
                <Link
                  className={`${
                    pathname === path ? "text-blue-600" : "text-black"
                  } hover:text-blue-600`}
                  to={path}
                  onClick={() => setHideMenu(true)}
                >
                  {title}
                </Link>
              </li>
            ))}

            {/* Conditional rendering for Log In or User Dropdown */}
            {customer ? (
              <li className="relative p-2 lg:p-0" ref={dropdownRef}>
                <button
                  onClick={handleDropdownToggle}
                  className="flex items-center text-black hover:text-blue-600 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  {customer.name}{" "}
                  <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 w-40 bg-gray-200 ml-8 mt-5 shadow-lg rounded-lg mt-1">
                    {DROPDOWN_OPTIONS.map(({ title, action }) => (
                      <li
                        key={title}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={action}
                      >
                        {title}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="p-2 lg:p-0">
                <Link
                  className={`${
                    pathname.includes("events") || pathname === "/signin"
                      ? "text-blue-600"
                      : "text-black"
                  } hover:text-blue-600`}
                  to="/sign-in"
                  onClick={() => setHideMenu(true)}
                >
                  Log In
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
