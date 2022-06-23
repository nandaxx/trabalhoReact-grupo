import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Formu = () => {


    let navigate = useNavigate();
    const initialValues = { username: "", email: "", subject: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErros, setFormErros] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErros(validate(formValues));
        setIsSubmit(true);
    };
    useEffect(() => {
        if (Object.keys(formErros).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErros]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Nome em branco";
        }
        if (!values.email) {
            errors.email = "E-mail em branco";
        } else if (!regex.test(values.email)) {
            errors.email = "Esse formato de e-mail não é válido";
        }
        if (!values.subject) {
            errors.subject = "Assunto em branco";
        }
        if (!values.message) {
            errors.message = "Mensagem em branco";
        }
        if (values.message && values.subject && values.email && values.username) {
            alert("Mensagem enviada com sucesso")
            //<div className="alert alert-danger">           Mensagem enviada com sucesso!        </div>
            navigate("/home")
        }
        return errors;
    };
    return (<>
        <section class="mb-6">
            <h2 class="h1-responsive font-weight-bold text-center my-4">Fale Conosco</h2>
            <p class="text-center w-responsive mx-auto mb-5">Como podemos te ajudar? Entre em contato conosco para que nosso time possa te auxiliar. É rápido, prático e fácil!</p>
            <div class="row">
                <div >
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="name" class="">Nome</label>
                                    <input type="text" id="name" name="username" class="form-control" value={formValues.username} onChange={handleChange} />
                                </div>
                            </div>
                            <div><p style={{ color: "red" }}>{formErros.username}</p></div>
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="email" class="">E-mail</label>
                                    <input type="text" id="email" name="email" class="form-control" value={formValues.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div><p style={{ color: "red" }}>{formErros.email}</p></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form mb-0">
                                    <label for="subject" class="">Assunto</label>
                                    <input type="text" id="subject" name="subject" class="form-control" value={formValues.subject} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div><p style={{ color: "red" }}>{formErros.subject}</p></div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <label for="message">Menssagem</label>
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" value={formValues.message} onChange={handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div><p style={{ color: "red" }}>{formErros.message}</p></div>
                        <div class="text-center text-md-left">
                            <button type="submit" class="btn bt btn-outline-primary" style={{ marginBottom: '50px' }}>Enviar</button>

                        </div>
                        <div class="status"></div>
                    </form>
                </div>
            </div>
        </section>
    </>)
}