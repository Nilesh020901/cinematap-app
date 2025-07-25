import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movies } from "./pages/Movies";
import "./App.css";
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./api/GetMoviesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/movies",
      element: <Movies />,
      loader: getMoviesData,
    },
    {
      path: "/movie/:movieID",
      element: <MovieDetails />,
      loader: getMoviesDetails,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;