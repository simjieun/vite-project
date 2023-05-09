import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./components/pages/List";
import Item from "./components/pages/Item";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List />,
    },
    {
      path: "/item/:id",
      element: <Item />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
