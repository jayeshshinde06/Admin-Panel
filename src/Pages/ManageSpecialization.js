import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";


const doctordata = [{
                id:1,
                lid: 101,
                na: "Jayesh",
                email: "jay@gmail.com",
                cono: "989898989",
                qual: "MBBS",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              },
              {
                id: 2,
                lid: 102,
                na: "Amit",
                email: "amit@gmail.com",
                cono: "9876543210",
                qual: "MD",
              }
            ]
export default function ManageSpecialization(){
    return(
        <>
         <div>
            <Sidebar />
            <main className="dashboard-main">
            <Headder />
            <Content />
            <Footer />
            </main>
         </div>
        </>
    )
}
function Content() {
  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Specialization Table</h6>
          <ul className="d-flex align-items-center gap-2">
            <li className="fw-medium">
              <Link
                to="/"
                className="d-flex align-items-center gap-1 hover-text-primary"
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="icon text-lg"
                />
                Dashboard
              </Link>
            </li>
            <li>-</li>
            <li className="fw-medium">Manage Specialization</li>
          </ul>
        </div>
        <Content2 />
      </div>
    </>
  );
}   

function Content2() {
  return (
    <>
      <div className="card basic-data-table">
        <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center">
            
              <label className="form-label w-200-px">Add Specialization</label>
                <input
                  type="text"
                  name="#0"
                  className="form-control"
                  placeholder="Enter Name"
                />
            
          </div>
          <div className="d-flex flex-wrap align-items-center gap-3">
            <button
              type="button"
              class="btn rounded-pill btn-primary-100 text-primary-600 radius-8 px-20 py-11"
            >
              Add Specialization
            </button>
          </div>
        </div>
        <div className="card-body">
          <table
            className="table bordered-table mb-0"
            id="dataTable"
            data-page-length={10}
          >
            <thead>
              <tr>
                    
                <th scope="col">Specialization Id</th>
                <th scope="col">Doctor Id</th>
                <th scope="col">Name</th>
                <th scope="col">Degree</th>
                <th scope="col">University</th>
                <th scope="col">Qualification</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {doctordata.map((pr,index)=>
                <tr>
                  
                <td>
                  <a href="javascript:void(0)" className="text-primary-600">
                    {index+1}
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="text-primary-600">
                    {index+101}
                  </a>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    {/* <img src="assets/images/user-list/user-list1.png" alt className="flex-shrink-0 me-12 radius-8" /> */}
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {pr.na}
                    </h6>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1 text-wrap">
                      {pr.email}
                    </h6>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {pr.cono}
                    </h6>
                  </div>
                </td>
                 
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {pr.qual}
                    </h6>
                  </div>
                </td>
                <td>
                  {/* <a
                    href="javascript:void(0)"
                    className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <iconify-icon icon="lucide:edit" />
                  </a> */}
                  <a
                    href="javascript:void(0)"
                    className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <iconify-icon icon="mingcute:delete-2-line" />
                  </a>
                </td>
              </tr>
              )}
            </tbody>
          </table>
          {/*  */}
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
  );
}