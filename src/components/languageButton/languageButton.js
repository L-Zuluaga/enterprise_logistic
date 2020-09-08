import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: 0,
    minWidth: 120,
    paddingBottom: '10px',
    float: 'right',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: 'white'
  }
}));

const LanguageButton = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [language, setLanguage] = useState('');

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
    setLanguage(event.target.value);
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{t('lang')}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={language}
        onChange={handleChange}
        label="Lenguaje"
      >
        <MenuItem value="">
          <em></em>
        </MenuItem>
        <MenuItem value={'es'} name="language">es</MenuItem>
        <MenuItem value={'en'} name="language">en</MenuItem>
      </Select>
    </FormControl>
  )
}

export default LanguageButton;
