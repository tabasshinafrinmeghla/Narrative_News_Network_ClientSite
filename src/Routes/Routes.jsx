import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category";
import News_Layout from "../Pages/Home/NewsPages/NewsPage1/News_Layout";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/category/:id',
        element: <Category></Category>,

      }
    ]



  }
  ,
  {
    path: '/',
    element: <News_Layout></News_Layout>,
  }
])

export default router;