import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category";
import NewsPage1 from "../Pages/Home/NewsPages/NewsPage1/NewsPage1";
import News_Layout from "../Pages/Home/NewsPages/NewsPageLayaout/News_Layout";



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
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)

      }
    ]



  }
  ,
  {
    path: '/news',
    element: <News_Layout></News_Layout>,

    children: [
      {
        path: ':id',
        element: <NewsPage1></NewsPage1>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
])

export default router;