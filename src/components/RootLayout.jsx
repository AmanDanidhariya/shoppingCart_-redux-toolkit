import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import { Provider } from "react-redux";
import Store from "../store/Store";

const RootLayout = () => {
  return (
    <>
      <Provider store={Store()}>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
