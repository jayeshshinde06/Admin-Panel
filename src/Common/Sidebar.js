import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar">
  <button type="button" className="sidebar-close-btn">
    <iconify-icon icon="radix-icons:cross-2" />
  </button>

  {/* Logo Section */}
  <div className="sidebar-logo-area">
    <Link to="/" className="sidebar-logo">
      <img 
        src="/assets/images/Special.png" 
        alt="Special Medi Plus Logo"
        height="80"
        width="80"
      />
      <p className="logo-text">Special Medi Plus</p>
    </Link>
  </div>

  {/* Menu Section */}
  <div className="sidebar-menu-area">
    <ul className="sidebar-menu">

      <li>
        <Link to="/">
          <iconify-icon 
            icon="solar:home-smile-angle-outline"
            className="menu-icon"
          />
          <span>Dashboard</span>
        </Link>
      </li>

      <li>
        <Link to="/managestate">
          <iconify-icon 
            icon="solar:layers-outline"
            className="menu-icon"
          />
          <span>Manage State</span>
        </Link>
      </li>

      <li>
        <Link to="/managespecialization">
          <iconify-icon 
            icon="solar:stethoscope-outline"
            className="menu-icon"
          />
          <span>Manage Specialization</span>
        </Link>
      </li>

      <li>
        <Link to="/managedoctor">
          <iconify-icon 
            icon="solar:user-plus-outline"
            className="menu-icon"
          />
          <span>Manage Doctor</span>
        </Link>
      </li>

      <li>
        <Link to="/manageuser">
          <iconify-icon 
            icon="solar:users-group-rounded-outline"
            className="menu-icon"
          />
          <span>Manage Users</span>
        </Link>
      </li>

      <li>
        <Link to="/manageappointment">
          <iconify-icon 
            icon="solar:calendar-outline"
            className="menu-icon"
          />
          <span>View Appointments</span>
        </Link>
      </li>

      <li>
        <Link to="/managepayment">
          <iconify-icon 
            icon="solar:dollar-outline"
            className="menu-icon"
          />
          <span>View Payments</span>
        </Link>
      </li>

      <li>
        <Link to="/managefeedback">
          <iconify-icon 
            icon="solar:chat-round-dots-outline"
            className="menu-icon"
          />
          <span>View Inquiries</span>
        </Link>
      </li>

    </ul>
  </div>
</aside>
 </>
  );
}
