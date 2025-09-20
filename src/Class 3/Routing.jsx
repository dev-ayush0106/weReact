import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Mern from './Children/Mern'
import Java from './Children/Java'
import Python from './Children/Python'
import Navbar from './Navbar'
import Nopage from './Pages/Nopage'
import StudentDetails from './Pages/StudentDetails'

const Routing = () => {
    const router=createBrowserRouter([
        {
            path:"/",
            element:<>
            <Navbar/>
            <Home/>
            </>
        },
        {
            path:"/about",
            element:<>
            <Navbar/>
            <About/>
               </>

        },
        {
            path:"/services",
            element:<>
            <Navbar/>
            <Services/>
            </>,
            children:[
              {
                path:"mern",
                element:<Mern/>
              },
              {
                path:"java",
                element:<Java/>
              },
              {
                path:"python",
                element:<Python/>
              }
            ]
        },
        {
            path:"/contact",
            element:<>
            <Navbar/>
            <Contact/></>
        },
        {
          path:"*",
          element:<Nopage/>
        },
        {
          path:"/studentdetails/:id",
          element:<StudentDetails/>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Routing
