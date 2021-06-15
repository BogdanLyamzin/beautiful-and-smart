import Modal from './shared/components/Modal'
import DaysTypesTable from './client/LunchpineScheduler/DaysTypesTable/components/DaysTypesTable'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './client/LunchpineScheduler/Navbar/components/Navbar'
// import SideBar from './client/LunchpineScheduler/SideBar/components';
// import Stepper from './pages/StepperPage';
// import Routes from './Routes';
// import Footer from './client/LunchpineScheduler/Footer/components';

function App() {
  return (
    <Router>

      <Navbar />
      <Modal />
      <DaysTypesTable />
      {/* <SideBar /> */}
      {/* <Stepper /> */}
      {/* <Routes /> */}
      {/* <Footer />  */}
    </Router>
  );
}


export default App;
