import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PantallaPrincipal from './PantallaPrincipal'
import Productos from './Productos'
import Clientes from './Clientes'
import Barberos from './barberos'

const router = createBrowserRouter ([

  {
    path: '/',
    element: <PantallaPrincipal/>
  },
  {
    path: '/productos',
    element: <Productos/>

  },
  {
    path: '/clientes',
    element: <Clientes/>
  },
  {
    path: '/barberos',
    element: <Barberos/>
  }
])

function App() {
  return(
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
