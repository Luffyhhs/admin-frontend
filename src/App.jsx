import Home from "./pages/home/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Login from "./pages/login/Login";
import "./styles/global.scss";
import Games from "./pages/games/Games";
import Units from "./pages/units/Units";
import Money from "./pages/money/Money";
import Setting from "./pages/setting/Setting";
import History from "./pages/history/History";
import { useState } from "react";
import Sidebar from "./components/menu/Sidebar";
import UnitsHistory from "./pages/units/UnitsHistory";

function App() {
  const [loginState, setLoginState] = useState(true);
  const login = (bol) => {
    setLoginState(bol);
  };
  const logout = (bol) => {
    setLoginState(bol);
  };
  const Layout = () => {
    return !loginState ? (
      <Login login={login} />
    ) : (
      <div className="main">
        <Navbar logout={logout} />
        <div className="container">
          <div className="menuContainer">
            <Sidebar />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/createUnits",
          element: <Units />,
        },
        {
          path: "/unitsHistory",
          element: <UnitsHistory />,
        },
        {
          path: "/games",
          element: <Games />,
        },
        {
          path: "/money",
          element: <Money />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
    {
      path: "/",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
