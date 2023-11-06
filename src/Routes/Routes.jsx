import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Category from "../Pages/Home/Category";
import NewsPage1 from "../Pages/Home/NewsPages/NewsPage1/NewsPage1";
import News_Layout from "../Pages/Home/NewsPages/NewsPageLayaout/News_Layout";
import About from "../Pages/Home/About/About";
import Career from "../Pages/Home/Career/Career";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndCondition from "../Pages/Home/Home/shared/TermsAndCondition/TermsAndCondition";




const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Navigate to="/category/0"></Navigate>

      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'terms',
        element: <TermsAndCondition></TermsAndCondition>
      }

    ]

  },
  {
    path: 'category',
    element: <Main></Main>,

    children: [

      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`https://narrative-news-network-server.vercel.app/categories/${params.id}`)

      }
    ]



  }
  ,
  {
    path: '/about',
    element: <About></About>,
  }
  ,
  {
    path: '/Career',
    element: <Career></Career>,
  }
  ,
  {
    path: '/news',
    element: <News_Layout></News_Layout>,

    children: [
      {
        path: ':id',
        element: <PrivateRoute> <NewsPage1></NewsPage1> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://narrative-news-network-server.vercel.app/news/${params.id}`)
      }
    ]
  }
])

export default router;