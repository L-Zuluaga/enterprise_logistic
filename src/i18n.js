import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "_id": "ID",
      "product": "Product",
      "provider": "Provider",
      "name": "Name",
      "quantity": "Quantity",
      "sellPrice": "Sell Price",
      "createdAt": "Creation Date",
      "updatedAt": "Modification Date",
      "address": "Address",
      "user": "User",
      "zone": "Zone",
      "type": "Type",
      "label": "Label",
      "distributor": "Distributor",
      "state": "State",
      "neighborhood": "Neighborhood",
      "route": "Route",
      "action": "Action",
      "inCharge": "In Charge",
      "buyPrice": "Buy Price",
      "weigh": "Peso",
      "weighUnit": "Weigh Unit",
      "tabManage": "Manage",
      "assignRoutes": "Assign Routes",
      "tracking": "Conveyors Tracking",
      "inventory": "Inventory",
      "routes": "Routes",
      "zones": "Zones",
      "orders": "Orders",
      "conveyors": "Conveyors",
      "distributors": "Distributors",
      "providers": "Providers",
      "products": "Products",
      "selectRoutes": "Select Routes",
      "selectConveyors": "Select Conveyors",
      "requestDate": "Request Date",
      "saveRouteAssign": "Save Route",
      "conveyorsTracking": "Conveyors Tracking",
      "viewInventory": "View my Inventory",
      "lang": "Language"
    }
  },
  es: {
    translation: {
      "_id": "ID",
      "product": "Producto",
      "provider": "Proveedor",
      "name": "Nombre",
      "quantity": "Cantidad",
      "sellPrice": "Precio de venta",
      "createdAt": "Fecha de creacion",
      "updatedAt": "Fecha de modificacion",
      "address": "Direccion",
      "user": "Usuario",
      "zone": "Zona",
      "type": "Tipo",
      "label": "Etiqueta",
      "distributor": "Distribuidor",
      "state": "Estado",
      "neighborhood": "Barrio",
      "route": "Ruta",
      "action": "Accion",
      "inCharge": "Encargado",
      "buyPrice": "Precio de Compra",
      "weigh": "Weigh",
      "weighUnit": "Unidad de Peso",
      "tabManage": "Gestion",
      "assignRoutes": "Asignar Rutas",
      "tracking": "Seguimiento Transportadores",
      "inventory": "Inventario",
      "routes": "Rutas",
      "zones": "Zonas",
      "orders": "Pedidos",
      "conveyors": "Transportadores",
      "distributors": "Distribuidores",
      "providers": "Proveedores",
      "products": "Productos",
      "selectRoutes": "Seleccionar Rutas",
      "selectConveyors": "Seleccionar Transportador",
      "requestDate": "Fecha de Solicitud",
      "saveRouteAssign": "Guardar Ruta",
      "conveyorsTracking": "Seguimiento de Transportadores",
      "viewInventory": "Ver mi inventario",
      "lang": "Lenguaje"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
  });

export default i18n;
