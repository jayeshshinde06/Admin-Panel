import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";

export default function Dashboard(){
    return(
        <>
         <div>
       <Sidebar/>
        <main className="dashboard-main">
         <Headder/>
                <Content/> 
          {/* <Content3 /> */}
         <Footer />
        </main>
      </div>
        </>
    )
}
function Content(){
    return(
        <>
          <div className="dashboard-main-body">
            <div className="d-flex flex-wrap row-cols-lg-1 align-items-center justify-content-between gap-3 mb-24">
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
              <h6 className="fw-semibold mb-0">Dashboard</h6>
              <ul className="d-flex align-items-center gap-2">
                <li className="fw-medium">
                  <Link
                    to="/"
                    className="d-flex align-items-center gap-1 hover-text-primary">
                    <iconify-icon
                      icon="solar:home-smile-angle-outline"
                      className="icon text-lg"
                    />
                    Dashboard
                  </Link>
                </li>
                <li>-</li>
                <li className="fw-medium">AI</li>
              </ul>
              </div>
              <Content3 />
            </div>
          </div>
        </>
    );
}

function Content3(){
  return(
    <>
   <div className="row row-cols-xxxl-5 row-cols-lg-2 row-cols-sm-2 row-cols-1 gy-4">
  <div className="col">
    <div className="card shadow-none border bg-gradient-start-1 h-100">
      <div className="card-body p-20">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <p className="fw-medium text-primary-light mb-1">Total Users</p>
            <h6 className="mb-0">20,000</h6>
          </div>
          <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
            <iconify-icon icon="gridicons:multiple-users" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
          <span className="d-inline-flex align-items-center gap-1 text-success-main"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +5000</span> 
          Last 30 days users
        </p>
      </div>
    </div>{/* card end */}
  </div>
  <div className="col">
    <div className="card shadow-none border bg-gradient-start-4 h-100">
      <div className="card-body p-20">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <p className="fw-medium text-primary-light mb-1">Total Doctor</p>
            <h6 className="mb-0">42,000</h6>
          </div>
          <div className="w-50-px h-50-px bg-success-main rounded-circle d-flex justify-content-center align-items-center">
            <iconify-icon  icon="flowbite:profile-card-solid" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
          <span className="d-inline-flex align-items-center gap-1 text-success-main"><iconify-icon icon="bxs:up-arrow" className="text-xs"  /> +20,000</span> 
          Last 30 days income
        </p>
      </div>
    </div>{/* card end */}
  </div>
  <div className="col">
    <div className="card shadow-none border bg-gradient-start-1 h-100">
      <div className="card-body p-20">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div>
            <p className="fw-medium text-primary-light mb-1">Total Appointment</p>
            <h6 className="mb-0">20,000</h6>
          </div>
          <div className="w-50-px h-50-px bg-cyan rounded-circle d-flex justify-content-center align-items-center">
            <iconify-icon icon="gridicons:multiple-users" className="text-white text-2xl mb-0" />
          </div>
        </div>
        <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
          <span className="d-inline-flex align-items-center gap-1 text-success-main"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +5000</span> 
          Last 30 days users
        </p>
      </div>
    </div>{/* card end */}
  </div>
  <div className="col">
  <div className="card shadow-none border bg-gradient-start-4 h-100">
    <div className="card-body p-20">
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
        <div>
          <p className="fw-medium text-primary-light mb-1">Total Income</p>
          <h6 className="mb-0">$42,000</h6>
        </div>
        <div className="w-50-px h-50-px bg-success-main rounded-circle d-flex justify-content-center align-items-center">
          <iconify-icon icon="solar:wallet-bold" className="text-white text-2xl mb-0" />
        </div>
      </div>
      <p className="fw-medium text-sm text-primary-light mt-12 mb-0 d-flex align-items-center gap-2">
        <span className="d-inline-flex align-items-center gap-1 text-success-main"><iconify-icon icon="bxs:up-arrow" className="text-xs" /> +$20,000</span> 
        Last 30 days income
      </p>
    </div>
  </div>{/* card end */}
</div>

</div>
    </>
  );
}