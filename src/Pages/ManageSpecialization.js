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
                <th scope="col">
                  <div className="form-check style-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">S.L</label>
                  </div>
                </th>
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
                  <div className="form-check style-check d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">{index+1}</label>
                  </div>
                </td>
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
        </div>
      </div>
    </>
  );
}