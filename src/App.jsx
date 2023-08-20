import Home from "./pages/home/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Games from "./pages/games/Games";
import Units from "./pages/units/Units";
import Money from "./pages/money/Money";
import Setting from "./pages/setting/Setting";
import History from "./pages/history/History";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
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
          path: "/units",
          element: <Units />,
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
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
