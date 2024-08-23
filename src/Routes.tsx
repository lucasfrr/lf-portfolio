import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About/About";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Projects from "./pages/Projects/Projects";

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
    }
])

export default Routes