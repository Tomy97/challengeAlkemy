import { Menubar } from 'primereact/menubar'
import { MenuItem } from 'primereact/menuitem';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutingConstants } from '../../constants/Routing';

export const Navbar: FC = () => {
  const router = useNavigate()
  const items: MenuItem[] = [
    {
      label: 'Mi Equipo',
      command: () => {
        router(RoutingConstants.MYTEAM)
      }
    }
  ]
  return (
    <div className='card'>
      <Menubar
        model={items}
        start={
          <span
            style={{ cursor: 'pointer', fontWeight: 'bold' }}
            onClick={() => router(RoutingConstants.HOME)}
          >
            Superhero App
          </span>
        }
      />
    </div>
  )
}
