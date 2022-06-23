import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { api } from "../../Service/api";
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom";
export const Registro = () => {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState([]);


  let navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      emailCliente: email,
      nomeCompletoCliente: name,
      cpfCliente: cpf,
      telefoneCliente: telefone,
      dataNascimentoCliente: dayjs(dataNascimento).format('DD/MM/YYYY'),

    };
    try {
      await api.post("e-commerce/cliente", data);
      setShow(true);
      setSuccess(true);
      setCpf("");
      setName("");
      alert("Cadastro realizado com sucesso, voce ira ser redirecionado para a tela de login")
      navigate("/login")
    } catch (err) {
      alert(err)
      setShow(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <Form>
        <Form.Text className="text-muted">
          <h4 style={{ color: 'black', marginTop: '3px' }}>Registre-se</h4>
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label> Nome e Sobrenome</Form.Label>
          <Form.Control type="name" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCPF">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="CPF" placeholder="... ... ... .." value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control type="date" placeholder="dd/mm/yyyy" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control type="phone" placeholder=".. ........." value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={(e) => handleRegister(e)}>
          Registro
        </Button>
      </Form>
    </>
  );
}