import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import AdminForm from "./components/AdminForm/AdminForm";
import ProductsTable from "./components/ProductsTable/ProductsTable";

const router = createBrowserRouter([
  { path: "/", element: <ProductsTable /> },
  { path: "/edit/:productId", element: <AdminForm /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
