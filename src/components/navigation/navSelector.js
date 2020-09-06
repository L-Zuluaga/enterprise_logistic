import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import CrudButton from '../crud/children/crudButton';
import LanguageButton from '../languageButton/languageButton';
import { resetUserState } from '../../services/userSession';
import styles from './styles.js';
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  navButton: {
    color: 'white'
  },
  selector: {
    paddingTop: '15px'
  },
}));

const NavSelector = ({ roleUser, resetUserState, ...props }) => {
  const { t, i18n } = useTranslation();
  const handleLogout = () => {
    resetUserState();
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  if (roleUser == 'ADMIN') {
    return(
      <>
        <Grid container>
          <Grid item xs={12} >
            <SupervisedUserCircleIcon fontSize={"large"} style={styles.roleIcon} />
            <Typography variant="h6" >
              Enterprise Logistic
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              startIcon={<ArrowDropDownIcon />}
              className={classes.navButton}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {t('tabManage')}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><a href="/inventario">{t('inventory')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/rutas">{t('routes')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/zonas">{t('zones')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/pedidos">{t('orders')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/transportadores">{t('conveyors')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/distribuidores">{t('distributors')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/proveedores">{t('providers')}</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="/productos">{t('products')}</a></MenuItem>
            </Menu>
            <Button href="/asignar-rutas" style={styles.navButton}>{t('assignRoutes')}</Button>
            <Button href="/seguimiento-transportadores" style={styles.navButton}>{t('tracking')}</Button>
            <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
            <LanguageButton  />
          </Grid>
        </Grid>
      </>
    )
  }
  else if(roleUser == 'PROVIDER'){
    return(
      <Grid container>
        <Grid item xs={12}>
          <BusinessCenterIcon fontSize={"large"} style={styles.roleIcon} />
          <Typography variant="h6" >
            Enterprise Logistic
          </Typography>
          <Button href="/mi-inventario" style={styles.navButton}>{t('viewInventory')}</Button>
          <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
          <LanguageButton  />
        </Grid>
      </ Grid>
    )
  }
  else if(roleUser == 'DISTRIBUTOR'){
    return(
      <>
        <AddShoppingCartIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/comprar" style={styles.navButton}>Comprar Productos</Button>
        <Button href="/mis-pedidos" style={styles.navButton}>Mis pedidos</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else if(roleUser == 'CONVEYOR'){
    return(
      <>
        <LocalShippingIcon fontSize={"large"} style={styles.roleIcon} />
        <Typography variant="h6" >
          Enterprise Logistic
        </Typography>
        <Button href="/consultar-rutas" style={styles.navButton}>Consultar Rutas</Button>
        <Button href="/historial" style={styles.navButton}>Historial Rutas</Button>
        <Button href="/login" style={styles.navButton} onClick={handleLogout}>Logout</Button>
      </>
    )
  }
  else{
    return(
      <>
      <DirectionsWalkIcon fontSize={"large"} style={styles.roleIcon} />
      <Typography variant="h6" >
        Enterprise Logistic
      </Typography>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetUserState: () => dispatch(resetUserState())
  }
}

const mapStateToProps = (userInfo) => {
  return {
      roleUser: userInfo.roleUser
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NavSelector);
