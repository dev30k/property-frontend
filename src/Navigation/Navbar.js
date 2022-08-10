import React from "react";
import { NavLink } from "react-router-dom";
import { MdApartment, MdOutlineCancelPresentation } from "react-icons/md";
import {
  AiOutlineBank,
  AiOutlineCloudServer,
  AiOutlineDashboard,
  AiOutlineLogout,
  AiOutlineMessage,
} from "react-icons/ai";
import logo from "../assets/svg/logos.svg";
import { HiDocumentReport } from "react-icons/hi";
import { GiHouseKeys } from "react-icons/gi";
import { GrVmMaintenance } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div>
      <nav className="lg:hidden py-6 px-6 border-b">
        <div className="flex items-center justify-between">
          <a className="text-2xl font-semibold" href="#">
            <img
              className="h-10"
              src="../assets/svg/logo.svg"
              alt=""
              width="auto"
            />
          </a>
          <button
            className="navbar-burger flex items-center rounded focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            onDoubleClick={() => setMenuOpen()}
          >
            <svg
              className="text-white bg-color-primary hover:bg-color-secondary block h-8 w-8 p-2 rounded"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:block navbar-menu relative z-50">
          <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
            <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-color-producer">
              <a className="text-xl font-semibold" href="#">
                <img className="h-8" src={logo} alt="" />
              </a>
              <MdOutlineCancelPresentation />
            </div>
            <div className="px-4 pb-6">
              <h3 className="mb-2 text-xs uppercase text-gray-400 font-medium">
                PRIMARY
              </h3>
              <ul className="mb-8 text-sm font-medium">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/dashboard"
                  >
                    <span className="inline-block mr-3">
                      <AiOutlineDashboard size={24} />
                    </span>
                    <span>Dashboard</span>
                    <span className="inline-block ml-auto"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/properties"
                  >
                    <span className="inline-block mr-3">
                      <MdApartment size={24} />
                    </span>
                    <span>Properties</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/finances"
                  >
                    <span className="inline-block mr-3">
                      <AiOutlineBank size={24} />
                    </span>
                    <span>Banking and Finances</span>
                    <span className="inline-block ml-auto"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/reports"
                  >
                    <span className="inline-block mr-3">
                      <HiDocumentReport size={24} />
                    </span>
                    <span>Reports</span>
                    <span className="inline-block ml-auto"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/applicants"
                  >
                    <span className="inline-block mr-3">
                      <GiHouseKeys size={24} />
                    </span>
                    <span>Applicants</span>
                    <span className="inline-block ml-auto"></span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/maintenance"
                  >
                    <span className="inline-block mr-3">
                      <GrVmMaintenance size={24} color="grey" />
                    </span>
                    <span>Maintenance</span>
                    <span className="inline-block ml-auto"></span>
                  </NavLink>
                </li>
              </ul>
              <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
                Secondary
              </h3>
              <ul className="text-sm font-medium">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/cloud-documents"
                  >
                    <span className="inline-block mr-3">
                      <AiOutlineCloudServer size={24} />
                    </span>
                    <span>Cloud Documents</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                        : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                    }
                    to="/notifications"
                  >
                    <span className="inline-block mr-3">
                      <AiOutlineMessage size={24} />
                    </span>
                    <span>Notifications</span>
                  </NavLink>
                </li>
              </ul>
              <div className="pt-8">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to={"/settings"}
                >
                  <span className="inline-block mr-4">
                    <FcSettings size={24} />
                  </span>
                  <span>Settings</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to={"/"}
                >
                  <span className="inline-block mr-4">
                    <AiOutlineLogout size={24} />
                  </span>
                  <span>Log Out</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      )}
      <div className=" hidden lg:block navbar-menu relative z-50">
        <div className="navbar-backdrop fixed lg:hidden inset-0 bg-gray-800 opacity-10"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-3/4 lg:w-80 sm:max-w-xs pt-6 pb-8 bg-white border-r overflow-y-auto">
          <div className="flex w-full items-center px-6 pb-6 mb-6 lg:border-b border-color-producer">
            <a className="text-xl font-semibold" href="#">
              <img className="h-8" src={logo} alt="" />
            </a>
          </div>
          <div className="px-4 pb-6">
            <h3 className="mb-2 text-xs uppercase text-gray-400 font-medium">
              PRIMARY
            </h3>
            <ul className="mb-8 text-sm font-medium">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/dashboard"
                >
                  <span className="inline-block mr-3">
                    <AiOutlineDashboard size={24} />
                  </span>
                  <span>Dashboard</span>
                  <span className="inline-block ml-auto"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/properties"
                >
                  <span className="inline-block mr-3">
                    <MdApartment size={24} />
                  </span>
                  <span>Properties</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/finances"
                >
                  <span className="inline-block mr-3">
                    <AiOutlineBank size={24} />
                  </span>
                  <span>Banking and Finances</span>
                  <span className="inline-block ml-auto"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/reports"
                >
                  <span className="inline-block mr-3">
                    <HiDocumentReport size={24} />
                  </span>
                  <span>Reports</span>
                  <span className="inline-block ml-auto"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/applicants"
                >
                  <span className="inline-block mr-3">
                    <GiHouseKeys size={24} />
                  </span>
                  <span>Applicants</span>
                  <span className="inline-block ml-auto"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/maintenance"
                >
                  <span className="inline-block mr-3">
                    <GrVmMaintenance size={24} color="grey" />
                  </span>
                  <span>Maintenance</span>
                  <span className="inline-block ml-auto"></span>
                </NavLink>
              </li>
            </ul>
            <h3 className="mb-2 text-xs uppercase text-gray-500 font-medium">
              Secondary
            </h3>
            <ul className="text-sm font-medium">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/cloud-documents"
                >
                  <span className="inline-block mr-3">
                    <AiOutlineCloudServer size={24} />
                  </span>
                  <span>Cloud Documents</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                      : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                  }
                  to="/notifications"
                >
                  <span className="inline-block mr-3">
                    <AiOutlineMessage size={24} />
                  </span>
                  <span>Notifications</span>
                </NavLink>
              </li>
            </ul>
            <div className="pt-8">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                    : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                }
                to={"/settings"}
              >
                <span className="inline-block mr-4">
                  <FcSettings size={24} />
                </span>
                <span>Settings</span>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center pl-3 py-3 pr-4 rounded-lg bg-color-primary text-white "
                    : "flex items-center pl-3 py-3 pr-4  hover:bg-color-producer rounded text-gray-500"
                }
                to={"/"}
              >
                <span className="inline-block mr-4">
                  <AiOutlineLogout size={24} />
                </span>
                <span>Log Out</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
