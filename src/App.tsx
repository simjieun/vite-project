import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>,
        },
    ])
    return (
        <RouterProvider router={router}/>
    );
}

export default App
