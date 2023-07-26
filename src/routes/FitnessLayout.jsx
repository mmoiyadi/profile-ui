import FitnessHeader from "../components/FitnessHeader";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function FitnessLayout() {
    return (
      <>
        <MainHeader></MainHeader>
        <FitnessHeader></FitnessHeader>
        <Outlet />
      </>
    );
  }
  
  export default FitnessLayout;
  