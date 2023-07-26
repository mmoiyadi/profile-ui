import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";
import { MdMessage } from "react-icons/md";
function RootLayout() {
  return (
    <>
      <MainHeader></MainHeader>
      <Outlet />
    </>
  );
}

export default RootLayout;
