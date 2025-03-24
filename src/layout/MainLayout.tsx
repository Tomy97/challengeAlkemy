import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar'

// Todo MainLayout: Tengo que implementar el navbar, como tambien la redireccion al my-team, como tambien la data del usuario logueado
export const MainLayout: FC = () => {
  return (
    <>
      <Navbar />
      <div className='max-h-screen'>
        <Outlet />
      </div>
    </>
  )
}
