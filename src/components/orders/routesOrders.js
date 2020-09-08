import React, { useState, useEffect } from "react";
import Crud from '../crud';
import Dialog from '../dialog'
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import CrudTable from '../crud/children/crudTable.js';
import { getOrders, updateOrder, deleteOrder } from '../../services/services'
import { useTranslation } from 'react-i18next'

const RoutesOrders = () => {
  const [data, setData] = useState([{"status": "NO DATA"}])
  const { t, i18n } = useTranslation();

  useEffect( async () => {
    let responseData = await getOrders();

    setData(responseData);
  }, [])

  return (
    <Container>
      <Typography variant='h1'>
        {t('orders')}
      </Typography>
      <br />
      <CrudTable
        data={data}
        updateAction={updateOrder}
        deleteAction={deleteOrder}
      />
    </Container>
  );
}

export default RoutesOrders;
