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

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      <h1>Hello Jac</h1>
      <FormControlLabel
        control={<Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          color="primary"
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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
