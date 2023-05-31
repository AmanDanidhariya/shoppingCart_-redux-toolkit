
import {Outlet} from 'react-router-dom'
import Navbar from '../NavBar'

const RootLayout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/> 
        </main>
    </>
  )
}

export default RootLayout