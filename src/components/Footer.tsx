

const Footer = () => {
  return (
    <>
          <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Monarca Bar</h3>
                  <p>
                  Calle Industria # 118, / San Jos&eacute; y San Mart&iacute;n, Camaguey, Cuba<br></br>
                    <strong>Tel&eacute;fono:</strong> +53 58 63 88 62<br />
                    <strong>Correo:</strong>monarcabar@gmail.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="https://www.facebook.com/profile.php?id=100093833165655&sk=about" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://instagram.com/monarca_bar?igshid=NzZhOTFlYzFmZQ==" type="blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Enlaces &uacute;tiles</h4>
                <ul>
                <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
                <li><a className="nav-link scrollto" href="#about">Sobre Nosotros</a></li>
                <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                <li><a className="nav-link scrollto" href="#specials">Especialidad</a></li>
                <li><a className="nav-link scrollto" href="#events">Eventos</a></li>
                <li><a className="nav-link scrollto" href="#gallery">Galer&iacute;a</a></li>
                <li><a className="nav-link scrollto" href="#contact">Contactos</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>MonarcaBar</span></strong>. Todos los derechos reservados
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer