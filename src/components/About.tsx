import about from '../assets/img/about.jpg'

const About = () => {
  return (
    <>
        <section id="about" className="about">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
          <div className="about-img">
            <img src={about} alt=""/>
          </div>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Monarca Bar</h3>
          <p className="fst-italic">
            Bienvenidos a Monarca Bar, el lugar ideal para disfrutar de una bebida refrescante,
            una picadera deliciosa y una buena compa&ntilde;&iacute;a. Estamos ubicados en Calle Industria 118,
            entre San Jos&eacute; y San Mart&iacute;n, en el coraz&oacute;n de la ciudad. Aqu&iacute; encontrar&aacute;s un ambiente
            acogedor, una decoraci&oacute;n moderna y una atenci&oacute;n personalizada.
          </p>

          <p>
            Te invitamos a conocer nuestro men&uacute;,
            que ofrece una variedad de opciones para todos los gustos y ocasiones. Ya sea que quieras celebrar un
            cumplea&ntilde;os, una reuni&oacute;n de trabajo o simplemente pasar un rato agradable, Monarca Bar es el sitio perfecto para ti.
            Ven y descubre por qu&eacute; somos el bar preferido de muchos. Te esperamos!
          </p>
        </div>
      </div>

    </div>
  </section>
    </>
  )
}

export default About