

const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Por qu&eacute; nosotros</h2>
            <p>Por qu&eacute; elegir nuestro Bar</p>
          </div>

          <div className="row">

            <div className="col-lg-4">
              <div className="box" data-aos="zoom-in" data-aos-delay="100">
                <span>01</span>
                <h4>Clima Perfecto</h4>
                <p>Se mantiene una temperatura agradable en todo el Local. No importa si
                  hace calor o fr&iacute;o afuera, usted podr&aacute; relajarse en un ambiente climatizado. </p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Deportes en vivo</h4>
                <p>Se transmiten eventos deportivos de inter&eacute;s, incluso puede elegirlo con anterioridad</p>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4>La mejor musica</h4>
                <p>Contamos con una extensa PlayList, moderna, rom&aacute;ntica, bailable para cualquier horario del d&iacute;a</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default WhyUs