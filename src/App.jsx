import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// App Layout Component
const Layout = () => {
  return (
    <>
      <Header />
      <div id="app-main-content-container">
        <Outlet />
      </div>
    </>
  );
};

function App() {
  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "posts/:postId", element: <Post /> },
        { path: "users/login", element: <Login /> },
        { path: "users/signup", element: <Signup /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
