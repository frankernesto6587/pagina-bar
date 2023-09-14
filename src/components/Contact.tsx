export const Contact = () => {
  return (
    <>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                <h2>Contactos</h2>
                <p>Cont&aacute;ctanos</p>
                </div>
            </div>
            <div className="container" data-aos="fade-up">
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Direcci&oacute;n:</h4>
                                <p>Calle Industria # 118, / San Jos&eacute; y San Mart&iacute;n, Camaguey, Cuba</p>
                            </div>
                        <div className="open-hours">
                            <i className="bi bi-clock"></i>
                            <h4>Horario:</h4>
                            <p>
                            Lunes a Lunes:<br />
                            2:00 PM - 4:00 AM
                            </p>
                        </div>
                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <h4>Email:</h4>
                            <p>monarcabar@gmail.com</p>
                        </div>
                        <div className="phone">
                            <i className="bi bi-phone"></i>
                            <h4>Llama:</h4>
                            <p>+53 58 63 88 62</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Correo" required />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" required />
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={Number("8")} placeholder="Mensaje" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Cargando...</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Tu mensaje ha sido enviado, Gracias!</div>
                    </div>
                    <div className="text-center"><button type="submit">Enviar</button></div>
                    </form>

                </div>

                </div>

            </div>
        </section>    
    </>
  )
}
