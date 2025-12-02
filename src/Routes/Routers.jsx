import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import SignIn from "../Pages/Auth/SignIn/SignIn";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import SendParcel from "../Pages/sendParcel/sendParcel";
import ErrorPage from "../Components/Error/ErrorPage";
import AboutUS from "../Pages/AboutUs/AboutUS";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
         path:'/send-parcel',
         loader: async () => {
          const res = await fetch("/serviceCenters.json");
          return res.json();
        },
         element:<PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>
      },
      {
         path:'/about-us',
         element:<AboutUS></AboutUS>
      },
      {
        path: "/coverage",
        loader: async () => {
          const res = await fetch("/serviceCenters.json");
          return res.json();
        },
        element: <Coverage />,
      },
    ],
  },
  {
    path:'/',
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/signin',
        element:<SignIn></SignIn>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
    children:[
      {
        path:'my-parcels',
        element:<MyParcels></MyParcels>
      }
    ]
  }
]);
