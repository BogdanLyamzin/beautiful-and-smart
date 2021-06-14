import NavBar from './client/LunchpineScheduler/Navbar/components';
import SideBar from './client/LunchpineScheduler/SideBar/components';
import Stepper from './pages/StepperPage';
import Routes from './Routes';
import Footer from './client/LunchpineScheduler/Footer/components';

function App() {
  return (
    <>
      <NavBar />
      <SideBar />
      <Stepper />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
