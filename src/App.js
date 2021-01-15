import React from 'react';
import logo from './logo.svg';
import './App.css';

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import TextField from '@material-ui/core/TextField'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom:15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: orange[500]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      <h1>Hello Jac</h1>
      <FormControlLabel
        control={<Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />}
        label="Testing Checkbox"
      />
    </>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="primary"
            type="date"
          />
          <CheckboxExample />
          <img src={logo} className="App-logo" alt="logo" />
          <ButtonGroup variant="contained" color="primary">
            <Button
              startIcon={<SaveIcon />}
            >
              Save
            </Button>

            <Button
              startIcon={<DeleteIcon />}
            >
              Discard
            </Button>
          </ButtonGroup>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
