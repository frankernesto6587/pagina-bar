import event1 from '../assets/img/event1.jpg'
import event2 from '../assets/img/event2.jpg'
const Events = () => {
  return (
    <>
         <section id="events" className="events">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Eventos</h2>
              <p>&Uacute;nete a nuestros eventos especiales</p>
            </div>

            <div className="events-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src={event1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Fiestas univercitarias</h3>
                      <div className="price">
                        <p><span>Gratis</span></p>
                      </div>
                      <p className="fst-italic">
                        Se hacen todos los preparativos necesarios para que los estudiantes univercitarios esten complacidos en nuestro local, se ajustan los precios y las ofertas para que sean acordes con los estudiantes.
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circled"></i> Entrada Gratis</li>
                        <li><i className="bi bi-check-circled"></i> Consumos especiales</li>
                        <li><i className="bi bi-check-circled"></i> Empleados de Seguridad extras</li>
                      </ul>
                      <p>
                        Participa con nosotros en estas fiestas especiales
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src={event2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Private Parties</h3>
                      <div className="price">
                        <p><span>Gratis</span></p>
                      </div>
                      <p className="fst-italic">
                        Eventos deportivos en vivo, proyectado en nuestras pantallas de alta resoluci&oacute;n, al mismo tiempo puedes disfrutar de buena m&uacute;sica con la compa&ntilde;&iacute; de tus amigos
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circled"></i> Futbol en vivo</li>
                        <li><i className="bi bi-check-circled"></i> Beisbol de Grandes Ligas</li>
                        <li><i className="bi bi-check-circled"></i> UFC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination"></div>{/* esto no se esta viedo*/}
            </div>

          </div>
        </section>
    </>
  )}

export default Events