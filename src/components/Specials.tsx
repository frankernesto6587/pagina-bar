import Specials1 from '../assets/img/specials1.png' 
import Specials2 from '../assets/img/specials4.png' 
import Specials3 from '../assets/img/specials3.png' 
import Specials4 from '../assets/img/specials4.png' 

const Specials = () => {
  return (
    <>
        <section id="specials" className="specials">
    <div className="container" data-aos="fade-up">

      <div className="section-title">
        <h2>Special</h2>
        <p>Consulta nuestras ofertas especiales</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        <div className="col-lg-3">
          <ul className="nav nav-tabs flex-column">
            <li className="nav-item">
              <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Rollitos de Jam&oacute;n y Queso</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Bomb&oacute;n de At&uacute;n</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Chelada</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Caipir&iacute;ssima</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Rollitos de Jam&oacute;n y Queso</h3>
                  <p className="fst-italic">Un delicioso entrem&eacute;s de jam&oacute;n Bravo y queso Gouda acompa&ntilde;ado de aceitunas</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src={Specials1} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Bomb&oacute;n de At&uacute;n</h3>
                  <p className="fst-italic"/>
                  <p>Queso Crema, At&uacute;n, todo empanado</p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src={Specials2} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Chelada</h3>
                  <p className="fst-italic">La Chelada, es una cerveza con hielo, sal y lim&oacute;n. Mientras, la cubana es conocida como una preparaci&oacute;n m&aacute;s completa que lleva cerveza, de preferencia oscura, lim&oacute;n y sal, jugo de tomate, salsa inglesa, salsa Tabasco y salsa Valentina. En este &uacute;ltmo caso, se sirve con el vaso escarchado con sal y chile en polvo. </p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src={Specials3} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-8 details order-2 order-lg-1">
                  <h3>Caipir&iacute;ssima</h3>
                  <p className="fst-italic">La Caipir&iacute;ssima es una adaptaci&oacute;n caribe&ntilde;a del tradicional c&oacute;ctel brasile&ntilde;o caipiri&ntilde;a (caipirinha), elaborado con RON en lugar de cachaza. </p>
                </div>
                <div className="col-lg-4 text-center order-1 order-lg-2">
                  <img src={Specials4} alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default Specials