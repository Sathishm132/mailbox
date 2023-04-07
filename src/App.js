
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Components/Signup';
import Signinpage from './Components/Signin';
import Mailpage from './Components/Mailpage';



function App() {
  const router= createBrowserRouter([
    {path:"/",
  element:<Signup/>},
  {
    path:"/signin",
    element:<Signinpage/>
  },
  {
    path:"/mail",
    element:<Mailpage/>
  }

  ])
  return (
   <>
   
  <RouterProvider router={router}></RouterProvider>
   </>
  );
}

export default App;
