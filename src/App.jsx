// import { path } from "express/lib/application"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./UI/Home";
import AppLayout from "./UI/AppLayout";
import Menu, { loader as menuLoader } from "./Features/Menu/Menu";
import Cart from "./Features/Cart/Cart";
import Order, { loader as Orderlaoder } from "./Features/Order/Order";
import Error from "./UI/Error";

import CreateOrder, {
  action as createOrderaction,
} from "./Features/Order/CreateOrder";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderaction,
      },
      {
        path: "./order/:orderId",
        element: <Order />,
        loader: Orderlaoder,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
