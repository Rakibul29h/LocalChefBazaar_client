import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "./../components/Shared/Footer/Footer";
import Container from "../components/Shared/Container/Container";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className=" min-h-[calc(100vh-30px)]">
        <Container>
            <Outlet />
        </Container>
      
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
