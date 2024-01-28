import { Outlet, createBrowserRouter } from "react-router-dom";
import Body from "./Body.jsx";
import Header from "./Header.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Category from "./components/Category.jsx";

function App() {
  return (
    <div className="">
      
      <Header/>
      <Outlet/>

    </div>
   
  );
}

export const appRouter = createBrowserRouter([
  { path : "/",
    element: <App/>,
    children:
    [
      { path :"/",
      element: <Home/>,
     
    },

      { path :"/body",
    element: <Body/>,
 
  },
  
  { path :"/contact",
    element: <Contact/>,
   
  },
  
  
  { path :"/about",
    element: <About/>,
   
  },
  { path :"/category",
  element: <Category/>,
 
},
//   { path :"/restaurants/:resId",
//   element: <RestaurantMenu/>,
// },

    ],
  }, 

  
]

);

export default App;
