import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import styles from '../styles.js';

import CrudActionButton from '../children/crudActionButton'
import ActionDialog from '../../dialog/dialogAction'
import { deleteProduct } from '../../../services/services';
import { useTranslation } from 'react-i18next'

const CrudTable = ({
  title,
  data,
  editActionTitle,
  editActionDescription,
  updateAction,
  deleteAction,
  disableEdit,
  disableDelete,
  ...props}) => {
  const keys = Object.keys(data[0]);
  const { t, i18n } = useTranslation();

  const formatDate = (date) => {
    let newDate = new Date(date).toLocaleDateString();
    return newDate;
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {keys.map((column) => (
              <TableCell style={styles.tableCell}> {t(`${column}`)} </TableCell>
            ))}
            {
              !disableDelete && !disableEdit
              ?
              <TableCell style={styles.actionTitle}> {t('action')} </TableCell>
              :
              <>
              </>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow align="center" >
                {
                  Object.entries(item).map((key, rowIndex) => {
                    console.log("FIELD NAME?", key[0])
                    if(key[0] == 'createdAt' || key[0] == 'updatedAt') {
                      return (<TableCell>{ formatDate( key[1]) }</TableCell>)
                    }else{
                      return (<TableCell>{ key[1] }</TableCell>)
                    }
                  })
                }
                <TableCell>
                  {
                    !disableEdit
                    ?
                    <ActionDialog
                      title={editActionTitle}
                      description={editActionDescription}
                      fields={item}
                      operation='edit'
                      updateAction={updateAction}
                    />
                  :
                  <>
                  < />
                  }
                  {
                    !disableDelete
                    ?
                    <CrudActionButton
                      size='small'
                      operation='delete'
                      item={item}
                      deleteAction={deleteAction}
                    />
                  :
                  <>
                  </>
                  }
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CrudTable;
