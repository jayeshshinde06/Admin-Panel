import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";

export default function ManageState(){
    return(
        <>
            <div>
                <Sidebar />
                <main className="dashboard-main">
                    <Headder />
                    <Content/>
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
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">State Table</h6>
          <ul className="d-flex align-items-center gap-2">
            <li className="fw-medium">
              <a
                href="/"
                className="d-flex align-items-center gap-1 hover-text-primary"
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="icon text-lg"
                />
                Dashboard
              </a>
            </li>
            <li>-</li>
            <li className="fw-medium">Manage State</li>
          </ul>
        </div>
        <Content2 />
      </div>
        </>
    )
}

function Content2(){
    return(
        <>
           <div className="card">
  <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
    <div className="d-flex flex-wrap align-items-center gap-3">
      
     
    </div>
    <div className="d-flex flex-wrap align-items-center gap-3">
      {/* <button type="button" href="/viewcity" class="btn rounded-pill btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"> 
       
      <Link to="/viewcity">  View Cities </Link>
        
        <iconify-icon icon="mingcute:square-arrow-right-line" class="text-xl"></iconify-icon></button> */}
        <button type="button" class="btn rounded-pill btn-primary-100 text-primary-600 radius-8 px-20 py-11">
      <Link to="/viewcity">  Add State </Link>
        </button>
    </div>
  </div>
  <div className="card-body">
    <table className="table bordered-table mb-0">
      <thead>
        <tr>
          <th scope="col">
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" defaultValue id="checkAll" />
              <label className="form-check-label" htmlFor="checkAll">
                S.L
              </label>
            </div>
          </th>
          <th scope="col">State Id</th>
          <th scope="col">State Name</th>
          
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className="form-check style-check d-flex align-items-center">
              <input className="form-check-input" type="checkbox" defaultValue id="check1" />
              <label className="form-check-label" htmlFor="check1">
                01
              </label>
            </div>
          </td>
          <td><a href="javascript:void(0)" className="text-primary-600">#526534</a></td>
          <td>
            <div className="d-flex align-items-center">
              {/* <img src="assets/images/user-list/user-list1.png" alt className="flex-shrink-0 me-12 radius-8" /> */}
              <h6 className="text-md mb-0 fw-medium flex-grow-1">Gujarat</h6>
            </div>
          </td>
          {/* <td>25 Jan 2024</td>
          <td>$200.00</td> */}
          {/* <td> <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Paid</span> </td> */}
          <td className="d-flex align-items-center gap-12  flex-wrap">
            {/* <a href="javascript:void(0)" className="w-32-px h-32-px bg-primary-light text-primary-600 rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="iconamoon:eye-light" />
            </a> */}
            <a href="javascript:void(0)" className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="lucide:edit" />
            </a>
            <a href="javascript:void(0)" className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center">
              <iconify-icon icon="mingcute:delete-2-line" />
            </a>
            <button type="button" href="/viewcity" class="btn rounded-pill btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"> 
            <Link to="/viewcity">  View Cities </Link> 
            <iconify-icon icon="mingcute:square-arrow-right-line" class="text-xl"></iconify-icon>
            </button>
    
          </td>
        </tr>
        
      </tbody>
    </table>
    <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-24">
      <span>Showing 1 to 10 of 12 entries</span>
      <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
        <li className="page-item">
          <a className="page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px bg-base" href="javascript:void(0)"><iconify-icon icon="ep:d-arrow-left" className="text-xl" /></a>
        </li>
        <li className="page-item">
          <a className="page-link bg-primary-600 text-white fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px" href="javascript:void(0)">1</a>
        </li>
        <li className="page-item">
          <a className="page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px" href="javascript:void(0)">2</a>
        </li>
        <li className="page-item">
          <a className="page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px" href="javascript:void(0)">3</a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px bg-base" href="javascript:void(0)"> <iconify-icon icon="ep:d-arrow-right" className="text-xl" /> </a>
        </li>
      </ul>
    </div>
  </div>
</div>

        </>
    )
}