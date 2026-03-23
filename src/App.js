// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/Sign-in";
import SignUp from "./Pages/SignUp";
import ManageDoctor from "./Pages/ManageDoctor";
import ManageUser from "./Pages/ManageUser";
import MangeAppointment from "./Pages/ManageAppointment";
import ManageFeedback from "./Pages/ManageFeedback";
import ManagePayment from "./Pages/ManagePayment";
import ManageState from "./Pages/ManageState";
import ManageCity from "./Pages/ManageCity";
import ManageArea from "./Pages/ManageArea";
import Error from "./Common/Errorpage";
import ManageSpecialization from "./Pages/ManageSpecialization";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Dashboard/>}/>
        <Route path="/managestate" element={<ManageState />}></Route>
        <Route path="/viewcity/:id" element={<ManageCity />}></Route>
        <Route path="/viewarea/:id" element={<ManageArea />}></Route>
        <Route path="/managedoctor" element={<ManageDoctor props="Manage Doctor"/>}/>
        <Route path="/manageuser" element={<ManageUser />} />
        <Route path="/manageappointment" element={<MangeAppointment />}/>
        <Route path="/managefeedback" element={<ManageFeedback />} />
        <Route path="/managepayment" element={<ManagePayment />} />
        <Route path="/managespecialization" element={<ManageSpecialization />}></Route>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/*" element={<Error />} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
