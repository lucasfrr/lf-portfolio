import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Projects from "./pages/Projects/Projects";
import TalksWorkshops from "./pages/TalksWorkshops/TalksWorkshops";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/about-me",
      element: <About />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/talks-and-workshops",
      element: <TalksWorkshops />
    },
    {
      path: "/blog",
      element: <Blog />
    }
])

export default Routes