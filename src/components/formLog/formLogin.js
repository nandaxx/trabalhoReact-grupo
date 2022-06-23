
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logar = () => {
  let navigate = useNavigate();
  var numero = 1;

  const initialValues = { email: "", cpf: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexcpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

    if (!values.email) {
      errors.email = "Requer um e-mail";
      return errors;
    } else if (!regex.test(values.email)) {
      errors.email = "Formato de e-mail ivalido";
      return errors;
    }
    if (!values.cpf) {
      errors.cpf = "Requer CPF";
      return errors;
    } else if (!regexcpf.test(values.cpf)) {
      errors.cpf = "Formato de CPF invÃ¡lido";
      return errors;
    }

    return navigate("/home");
  };





  return (
    <>
      <Form className="box" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" name='email' value={formValues.email} onChange={handleChange} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <p style={{ color: "red" }}>{formErrors.email}</p>
        <Form.Group className="mb-3" controlId="formBasicSsn">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="ssn" placeholder="CPF" name='cpf' value={formValues.cpf} onChange={handleChange} />
        </Form.Group>
        <p style={{ color: "red" }}>{formErrors.cpf}</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={validate}>
          Logar
        </Button>
      </Form>
    </>
  );
}
