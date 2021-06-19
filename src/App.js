// import Modal from './shared/components/Modal'
import DaysTypesPage from './pages/DaysTypesPage'
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
      {/* <Modal /> */}
      <DaysTypesPage />
      {/* <SideBar /> */}
      {/* <Stepper /> */}
      {/* <Routes /> */}
      {/* <Footer />  */}
    </Router>
  );
}


export default App;
