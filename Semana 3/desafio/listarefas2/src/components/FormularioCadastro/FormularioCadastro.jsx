import React from "react";
import {TextField, Button, Radio, RadioGroup, FormControlLabel} from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="outlined-basic"
        label="digite a descrição da tarefa"
        variant="outlined"
        margin="normal"
        fullWidth
        color="secondary"
      />
      <p>finalizada?</p>
      <RadioGroup
        name="status"
        //value={value}
        //onChange={handleChange}
      >
        <FormControlLabel value="sim" control={<Radio />} label="Sim" />
        <FormControlLabel value="nao" control={<Radio />} label="Não" />
      </RadioGroup>
      <Button variant="contained" color="secondary">
        Criar Tarefa
      </Button>
    </form>
  );
}

export default FormularioCadastro;
