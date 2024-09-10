import Home from './containers/Home';
import Login from './containers/auth/Login';
import Signup from './containers/auth/Signup';
import ResetPassword from './containers/auth/ResetPassword';
import ResetPasswordConfirm from './containers/auth/ResetPasswordConfirm';
import Facebook from './containers/auth/Facebook';
import Google from './containers/auth/Google';
import Layout from './hocs/Layout';
import Reglamento from './containers/Reglamento';
import Ubicacion from './containers/Ubicacion'
import Fotos from './containers/Fotos';
import Reservar from './containers/Reservar';
import Paquetes from './containers/Paquetes';
import Dashboard from './containers/Dashboard';
import Checkout from './containers/Checkout';
import PagoExitoso from './containers/PagoExitoso'
import MisEventos from './containers/MisEventos';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Precios from './containers/Precios';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import MainWrapper from './layout/MainWrapper';
import { Checkbox } from 'primereact/checkbox';
import Invoice from './containers/Invoice';
import Evento from './containers/Evento';
import Order from './containers/Order';

function App() {
  const router = createBrowserRouter([{
    // path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },{
        path: '/login',
        element: <Login/>,
      },{
        path: '/registrar',
        element: <Signup/>,
      },{
        path: '/panel',
        element: <Dashboard/>,
      },{
        path: '/checkout',
        element: <Checkout/>,
        },{
        path: '/invoice',
        element: <Invoice/>,
      },{
        path: '/reset-password/',
        element: <ResetPassword/>,
      }, {
        path: '/password/reset/confirm/:uid/:token/',
        element: <ResetPasswordConfirm/>,
      }, {
        path: '/google/',
        element: <Google/>,
      }, {
        path: '/facebook/',
        element: <Facebook/>,
      }, {
        path: '/precios/',
        element: <Precios/>,
      }, {
        path: '/ubicacion/',
        element: <Ubicacion/>,
      } ,{
        path: '/reglamento/',
        element: <Reglamento/>,
      },{
        path: '/fotos/',
        element: <Fotos/>,
      },{
        path: '/reservar/',
        element: <Reservar/>,
      },{
        path: '/pago-exitoso/:order_id/',
        element: <PagoExitoso/>,
      },{
        path: '/paquetes/',
        element: <Paquetes/>,
      },{
        path: '/mis-eventos/',
        element: <MisEventos/>,
      },{
        path: '/mis-eventos/:eventId',
        element: <Evento/>,
      },{
        path: '/mis-eventos/:eventId/ordenes/:oid',
        element: <Order/>,
      },
    ]

  }]);

  return (
    <>
      <MainWrapper>
        <RouterProvider router={router}/>
      </MainWrapper>
    </>
   
  )
}

export default App