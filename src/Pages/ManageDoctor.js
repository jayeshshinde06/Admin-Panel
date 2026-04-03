import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";
import Footer from "../Common/Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



export default function ManageDoctor(pro) {
  return (
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
  );
}
function Content() {
  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">Doctor Table</h6>
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
            <li className="fw-medium">Manage Doctor</li>
          </ul>
        </div>
        <Content2 />
      </div>
    </>
  );
}         
function Content2() {

  const [ doc, setDoc] = useState([]);

  async function fetchDoctor() {
    try {
      const response = await axios.get("http://localhost:8000/getdocforadmin");
      console.log(response.data.data);
      setDoc(response.data.data);
      
    } catch (error) {
      console.log("ManageDoctor.js", error);
      
    }
  }

  useEffect(()=>{
    fetchDoctor();
},[])
  return (
    <>
      <div className="card basic-data-table">
        <div className="card-header">
          <h5 className="card-title mb-0">Default Datatables</h5>
        </div>
        <div className="card-body">
          <table
            className="table bordered-table mb-0"
            id="dataTable"
            data-page-length={10}
          >
            <thead>
              <tr>
                <th scope="col">Doctor Id</th>
                <th scope="col">Location Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Contact No</th>
                <th scope="col">Qualification</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {doc.map((dr,index)=>
                <tr key={index}>
               
                <td>
                  <a href="javascript:void(0)" className="text-primary-600">
                    {dr._id}
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)" className="text-primary-600">
                    {dr.area_id}
                  </a>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    {/* <img src="assets/images/user-list/user-list1.png" alt className="flex-shrink-0 me-12 radius-8" /> */}
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {dr.fname}
                    </h6>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1 text-wrap">
                      {dr.email}
                    </h6>
                  </div>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {dr.phone}
                    </h6>
                  </div>
                </td>
                 
                <td>
                  <div className="d-flex align-items-center">
                    <h6 className="text-md mb-0 fw-medium flex-grow-1">
                      {dr.specialization_name}
                    </h6>
                  </div>
                </td>
                 <td>
                  <div className="d-flex align-items-center">
                    <span className="bg-success-focus text-success-main px-24 py-4 rounded-pill fw-medium text-sm">Active</span>
                  </div>
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    className="w-32-px h-32-px bg-success-focus text-success-main rounded-circle d-inline-flex align-items-center justify-content-center"
                  >
                    <iconify-icon icon="lucide:edit" />
                  </a>
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