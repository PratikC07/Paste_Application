import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import AllPastes from './components/AllPastes';
import Home from './components/Home';
import NavBar from './components/NavBar'
import ViewPaste from './components/ViewPaste';



function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <div className='w-full h-full'>
          <NavBar />
          <Home/>
        </div>
      },
      {
        path: '/pastes',
        element: <div className='w-full h-full'>
        <NavBar />
        <AllPastes/>
      </div>
      },
      {
        path: '/pastes/:id',
        element: <div className='w-full h-full'>
        <NavBar />
        <ViewPaste/>
      </div>
      }
    ]
  )


  return (
   <>
    <RouterProvider router={router}/>
   </>
   
  )
}

export default App
