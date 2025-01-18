import { Outlet } from "react-router-dom";
import MainNavbar from "./Components/NavBar/MainNavbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
