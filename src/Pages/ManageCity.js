import { Link, useLocation, useParams } from "react-router-dom";
import Footer from "../Common/Footer";
import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ManageCity() {
  return (
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
  );
}

export function Content() {

  return (
    <>
      <div className="dashboard-main-body">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-24">
          <h6 className="fw-semibold mb-0">City Table</h6>
          <ul className="d-flex align-items-center gap-2">
            <li className="fw-medium">
              <Link
                to="/managestate"
                className="d-flex align-items-center gap-1 hover-text-primary"
              >
                <iconify-icon
                  icon="solar:home-smile-angle-outline"
                  className="icon text-lg"
                />
                Manage State
              </Link>
            </li>
            <li>-</li>
            <li className="fw-medium">View City</li>
          </ul>
        </div>
        <Content2 />
      </div>
    </>
  );
}

function Content2() {
  // wise api for transfer id
  
  // Add Api

  
 const {id} = useParams();

  const [city, setCity] = useState([]);
  const [formData, setFormData] = useState({
    state_id: id,
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/addcity",
        formData
      );
      console.log(response);
      fetchCity();
      setFormData({ name : ""})
    } catch (error) {
      console.log(error);
    }
  };
// GET APi

  async function fetchCity() {
    try {
      const response = await axios.post(
        "http://localhost:8000/getstatewisecities",{st_id : id},
      );
      console.log(response.data.data);
      setCity(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center">
            
            <label className="form-label">Add City</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="form-control"
              placeholder="Enter City Name"
            />
          </div> 
          <div className="d-flex flex-wrap align-items-center gap-3">
            <button
              type="button"
              onClick={handleAdd}
              className="btn rounded-pill btn-primary-100 text-primary-600 radius-8 px-20 py-11"
            >
              Add City
            </button>
          </div>
        </div>
        <div className="card-body">
          <table className="table bordered-table mb-0">
            <thead>
              <tr>
                <th scope="col">City Id</th>
                <th scope="col">State Id</th>
                <th scope="col">City Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {city.map((ct, index) => (
                <tr key={index}>
                  <td>
                    <p  className="text-primary-600">
                      {index + 1}
                    </p>
                  </td>
                  <td>
                    <p className="text-primary-600">
                      {ct.state_id}
                    </p>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <h6 className="text-md mb-0 fw-medium flex-grow-1">
                        {ct.name}
                      </h6>
                    </div>
                  </td>
                  <td className="d-flex align-items-center gap-12  flex-wrap">
                    <a
                      href="javascript:void(0)"
                      className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    >
                      <iconify-icon icon="mingcute:delete-2-line" />
                    </a>
                    <button
                      type="button"
                      href="/viewcity"
                      class="btn rounded-pill btn-outline-success-600 radius-8 px-20 py-11 d-flex align-items-center gap-2"
                    >
                      <Link to={`/viewarea/${ct._id}`}> View Area </Link>
                      <iconify-icon
                        icon="mingcute:square-arrow-right-line"
                        class="text-xl"
                      ></iconify-icon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-24">
            <span>Showing 1 to 10 of 12 entries</span>
            <ul className="pagination d-flex flex-wrap align-items-center gap-2 justify-content-center">
              <li className="page-item">
                <a
                  className="page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px bg-base"
                  href="javascript:void(0)"
                >
                  <iconify-icon icon="ep:d-arrow-left" className="text-xl" />
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link bg-primary-600 text-white fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px"
                  href="javascript:void(0)"
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px"
                  href="javascript:void(0)"
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link bg-primary-50 text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px"
                  href="javascript:void(0)"
                >
                  3
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link text-secondary-light fw-medium radius-4 border-0 px-10 py-10 d-flex align-items-center justify-content-center h-32-px w-32-px bg-base"
                  href="javascript:void(0)"
                >
                  {" "}
                  <iconify-icon
                    icon="ep:d-arrow-right"
                    className="text-xl"
                  />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
