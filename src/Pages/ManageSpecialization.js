import { Link } from "react-router-dom";
import Footer from "../Common/Footer";
import Headder from "../Common/Headder";
import Sidebar from "../Common/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ManageSpecialization() {
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
  // This is for image
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);

    setImage(e.target.files[0]);
  };
  // thi is for insert input data
  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setFormdata({ ...formdata, [name]: value });
  };

  // this is for api response

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formdata.name || !image){
      alert("Please fill the fields!")
      return;
    }
    try {
      const form = new FormData();

      form.append("name", formdata.name);
      form.append("img", image);

      const response = await axios.post(
        "http://localhost:8000/addspecialization",
        form,
      );

      fetchSpe();
      setFormdata({ name: "" });
      setImage(null);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Data
  const [spe, setSpe] = useState([]);

  async function fetchSpe() {
    try {
      const response = await axios.get(
        "http://localhost:8000/getspecialization",
      );
      console.log(response.data.data);
      setSpe(response.data.data);
      
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSpe();
  }, []);
  return (
    <>
      <div className="card basic-data-table">
        <div className="card-header d-flex flex-wrap align-items-center justify-content-between gap-3">
          <div className="d-flex align-items-center">
            <label className="form-label w-200-px">Add Specialization</label>
            <input
              type="text"
              name="name"
              value={formdata.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="card-body p-24 d-flex w-200-px gap-3 align-items-center">
            <label
              htmlFor="basic-upload"
              className="border border-primary-600 fw-medium text-primary-600 px-16 py-12 radius-12 d-inline-flex align-items-center gap-2 bg-hover-primary-50"
            >
              <iconify-icon icon="solar:upload-linear" className="text-xl" />
              upload
            </label>
            <input
              type="file"
              className="form-control w-100 form-form-control-sm "
              id="basic-upload"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <button
              type="button"
              className="btn rounded-pill btn-primary-100 text-primary-600 radius-8 px-20 py-11"
              onClick={handleSubmit}
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
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {spe.map((sp, index) => (
                <tr key={index}>
                  <td>
                    <p className="text-primary-600">{sp._id}</p>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={`http://localhost:8000/uploads/images/${sp.image}`}
                        className="radius-8 table-img"
                         style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      />
                      <h6 className="text-md mb-0 fw-medium flex-grow-1"></h6>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <h6 className="text-md mb-0 fw-medium flex-grow-1 text-wrap">
                        {sp.name}
                      </h6>
                    </div>
                  </td>
                  <td>
                    <a
                      href="javascript:void(0)"
                      className="w-32-px h-32-px bg-danger-focus text-danger-main rounded-circle d-inline-flex align-items-center justify-content-center"
                    >
                      <iconify-icon icon="mingcute:delete-2-line" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/*  */}
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
