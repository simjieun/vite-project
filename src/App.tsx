import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/pages/List";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
