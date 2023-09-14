import Logo from  '../assets/img/logo.png'

const Hero = () => {
  return (
    <>
     {/*<!-- ======= Hero Section ======= -->*/}
    <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
            <div className="row">
                <div className="col-lg-8">
                    <img src={Logo} style={{width:'45%'}}  alt="" className="img-fluid" />
                    <h1>Bienvenido<span>Monarca Bar</span></h1>
                    <h2>Bar de Tapas y Cocteles</h2>
                    <div className="btns">
                        <a href="#menu" className="btn-menu animated fadeInUp scrollto">Nuestro Menu</a>
                    </div>
                </div>
                <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                    <a href="<?php echo base_url();?>assets/habana.mp4" className="glightbox play-btn"></a>
                </div>
            </div>
        </div>
    </section>{/*<!-- End Hero -->*/}
    </>
  )
}

export default Hero