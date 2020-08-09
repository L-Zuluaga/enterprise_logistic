import React from "react";
import Crud from '../crud';
//import getRoutes from '../../services/services.js'

import styles from './styles.js'

const RoutesCrud = () => {
  const routes = [
    {
      "id": "CE01",
      "proveedor": "CELEMA",
      "barrios": ["La linda", "Villapilar", "Campohermoso", "Chipre"],
      "ciudad": "manizales"
    },
    {
      "id": "CE02",
      "proveedor": "CELEMA",
      "barrios": ["Cable", "Expoferias", "San marcel", "La Enea"],
      "ciudad": "manizales"
    },
    {
      "id": "AL01",
      "proveedor": "ALPINA",
      "barrios": [],
      "ciudad": "manizales"
    },
    {
      "id": "MA01",
      "proveedor": "MARGARITA",
      "barrios": ["La linda", "Villapilar", "Campohermoso", "Chipre"],
      "ciudad": "manizales"
    },
    {
      "id": "AL-MA01",
      "proveedor": "MULTIMARCA",
      "barrios": ["La linda", "Villapilar", "Campohermoso", "Chipre"],
      "ciudad": "manizales"
    }
  ]

  return (
    <Crud
      label={"Rutas"}
      data={routes}
      buttonPosition={"right"}
      dialogBtnLabel={"Agregar"}
      dialogDescription={"Ingreselos datos de la ruta."}
    />
  );
}

export default RoutesCrud;
