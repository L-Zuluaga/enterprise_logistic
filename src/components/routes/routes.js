import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../login';
import RoutesCrud from '../routesCrud';
import RoutesConveyors from '../routesConveyors';
import RoutesProducts from '../routesProducts';
import RoutesOrders from '../orders/routesOrders';
import RoutesDistributors from '../routesDitributors';

import SignupTypeSelector from '../signup/signupTypeSelector';
import DistributorSignUp from '../signup/distributor';
import ProviderSignUp from '../signup/provider';
import ConveyorSignUp from '../signup/conveyor';

import AssignRoutes from '../assignRoutes/assignRoutes';

const Routes = ({ roleUser }) => {
  return (
    <Switch>
        /* Rutas registro */
        <Route path = '/signup'
          exact component = {
            SignupTypeSelector
          }
        />
        <Route path = '/signup/distribuidor'
          exact component = {
            DistributorSignUp
          }
        />
        <Route path = '/signup/proveedor'
            exact component = {
              ProviderSignUp
            }
          />
        <Route path = '/signup/transportador'
            exact component = {
              ConveyorSignUp
            }
          />

        /* Rutas Admin */
        <Route path = '/rutas'
          exact component = {
            RoutesCrud
          }
        />
      <Route path = '/pedidos'
          exact component = {
            RoutesOrders
          }
        />
        <Route path = '/transportadores'
          exact component = {
            RoutesConveyors
          }
        />
      <Route path = '/distribuidores'
          exact component = {
            RoutesDistributors
          }
        />
      <Route path = '/productos'
        exact component = {
          RoutesProducts
        }
      />
      <Route path = '/asignar-rutas'
          exact component = {
            AssignRoutes
          }
        />
        {
          roleUser == ''
          ?
          <Route path = '/login'
            exact component = {
              Login
            }
          />
          :
          <Redirect to="/home" />
        }
        /*
          Rutas Faltantes:
          - Admin
            - Crud Transportadores
            - Crud Distribuidores
            - Crud Proveedores
            - Teminar Asignar rutas
          - General
            - Signup selector
            - Signup de cada rol
          - Distribuidores
            - Comprar Productos
            - Ver pedidos
          - Transportadores
            - Ver Rutas
            - Historial de Rutas
          - Proveedor
            - Ver Productos
            - Actualizar productos
        */
    </Switch>
  )
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser
  }
}

export default connect(mapStateToProps)(Routes);
