import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Layouts
import MainLayout from "./layout/MainLayout";
// Pages
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/quiz/:quiz",
          element: <QuizPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
