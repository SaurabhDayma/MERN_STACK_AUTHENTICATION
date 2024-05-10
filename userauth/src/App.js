import { createBrowserRouter ,  RouterProvider} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
  {
    path : '/home',
    element : <Home/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

