import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Dashboard from './Dashboard';
import Cart from './Cart';
import RootLayout from './components/RootLayout';

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className='app'>
      <RouterProvider router={router }/>
    </div>
  )
}

export default App
