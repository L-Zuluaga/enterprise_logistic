import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { getConveyors } from '../../services/services.js';
import MapContainer from '../GoogleMap/googleMap';
import { useTranslation } from 'react-i18next'

import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyA4OWg7E45FU9M5o98D1IL48dtk8o4bKzU",
  authDomain: "usergps-3d263.firebaseapp.com",
  databaseURL: "https://usergps-3d263.firebaseio.com",
  projectId: "usergps-3d263",
  storageBucket: "usergps-3d263.appspot.com",
  messagingSenderId: "9193278715",
  appId: "1:9193278715:web:0200e1d20213759f89345e"
}

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selector: {
    paddingTop: '15px'
  }
}));

const ConveyorTracing = () => {
  const firestore = firebase.firestore();

  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [conveyors, setConveyors] = useState([]);
  const [conveyor, setConveyor] = useState({status: "unloaded"});
  const [conveyorLocation, setConveyorLocation] = useState({la: 5.068488, lo: -75.484470});

  const [counter, setCounter] = useState(
    {la: 5.068488, lo: -75.484470}
  );

  const fetchLocation = () => {
    let x = firestore.collection('usuarios').doc(conveyor._id).onSnapshot( (doc) => {
      console.log("Fetched data: ", doc.data());
      setConveyorLocation({...conveyorLocation, 'lo': doc.data().longitude, 'la': doc.data().latitude});
    });
  }

  useEffect( async () => {
    let responseRoutes = await getConveyors();
    setConveyors(responseRoutes);
  }, [])

  /* For Firebase */
  useEffect( () => {
    const interval = setInterval(() => {
      if (conveyor.status != "unloaded") {
        fetchLocation();
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  const handleConveyorChange = async (event) => {
    setConveyor(event.target.value)

  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant={'h1'}>
          {t('conveyorsTracking')}
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.selector}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">{t('selectConveyors')}</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={conveyor}
            onChange={handleConveyorChange}
            label="Seleccione una Ruta"
          >
            {
              conveyors.map( (selectedConveyor) => (
                <MenuItem value={selectedConveyor}>{selectedConveyor.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {
          conveyor.status != "unloaded"
          ?
          <MapContainer latitud={conveyorLocation.la} longitud={conveyorLocation.lo} name={conveyor.name} />
          :
          <>
          </>
        }
      </Grid>
    </Grid>
  )
}

export default ConveyorTracing;
