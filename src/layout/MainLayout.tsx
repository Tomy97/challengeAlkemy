import { FC } from 'react'
import { Outlet } from 'react-router-dom'

// Todo MainLayout: Tengo que implementar el navbar, como tambien la redireccion al my-team, como tambien la data del usuario logueado
export const MainLayout: FC = () => {
  return (
    <>
      <h2>
        Main Layout
      </h2>
      <Outlet />
    </>
  )
}
