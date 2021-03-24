import React, { useState } from "react";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [status, setStatus] = useState(false);
//   const [status_switch, setStatusSwitch] = useState(false); //finalizar com botão interruptor
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, status})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="outlined-basic"
        label="digite a descrição da tarefa"
        variant="outlined"
        margin="normal"
        fullWidth
        color="secondary"
      />
      <p>finalizada?</p>
      <RadioGroup name="status">
        <FormControlLabel
          value="sim"
          control={<Radio />}
          label="Sim"
          checked={status === true}
          onChange={() => {
            setStatus(true);
          }}
        />
        <FormControlLabel
          value="nao"
          control={<Radio />}
          label="Não"
          checked={status === false}
          onChange={() => {
            setStatus(false);
          }}
        />
      </RadioGroup>

      {/* Finalizar com botão interruptor */}
      {/* <FormControlLabel
        control={
          <Switch
            size="small"
            checked={status_switch}
            onChange={(event) => {
              setStatusSwitch(event.target.checked);
            }}
          />
        }
        label=""
      /> */}

      <Button type="submit" variant="contained" color="secondary">
        Criar Tarefa
      </Button>
    </form>
  );
}

export default FormularioCadastro;
