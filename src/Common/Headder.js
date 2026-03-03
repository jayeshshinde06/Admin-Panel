import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Headder() {
  
  return (
    <>
    
     <div className="navbar-header">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <div className="d-flex flex-wrap align-items-center gap-4">
                  <button type="button" className="sidebar-toggle">
                    <iconify-icon
                      icon="heroicons:bars-3-solid"
                      className="icon text-2xl non-active"
                    />
                    <iconify-icon
                      icon="iconoir:arrow-right"
                      className="icon text-2xl active"
                    />
                  </button>
                  <button type="button" className="sidebar-mobile-toggle">
                    <iconify-icon
                      icon="heroicons:bars-3-solid"
                      className="icon"
                    />
                  </button>
                  {/* <form className="navbar-search">
                    <input type="text" name="search" placeholder="Search" />
                    <iconify-icon icon="ion:search-outline" className="icon" />
                  </form> */}
                </div>
              </div>
              <div className="col-auto">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  {/* <button
                    type="button"
                    data-theme-toggle
                    className="w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center"
                  /> */}
                 
                  {/* Language dropdown end */}
                 
                  {/* Message dropdown end */}
                
                  {/* Notification dropdown end */}
                  <div className="dropdown">
                    <button
                      className="d-flex justify-content-center align-items-center rounded-circle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      <img
                        src="assets/images/user.png"
                        alt="image"
                        className="w-40-px h-40-px object-fit-cover rounded-circle"
                      />
                    </button>
                    <div className="dropdown-menu to-top dropdown-menu-sm">
                      <div className="py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2">
                        <div>
                          <h6 className="text-lg text-primary-light fw-semibold mb-2">
                            Petter Parker
                          </h6>
                          <span className="text-secondary-light fw-medium text-sm">
                            Admin
                          </span>
                        </div>
                        <button type="button" className="hover-text-danger">
                          <iconify-icon
                            icon="radix-icons:cross-1"
                            className="icon text-xl"
                          />
                        </button>
                      </div>
                      <ul className="to-top-list">
                        
                        <li>
                          <a
                            className="dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3"
                            href="javascript:void(0)"
                          >
                            <iconify-icon
                              icon="lucide:power"
                              className="icon text-xl"
                            />{" "}
                            Log Out
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Profile dropdown end */}
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
