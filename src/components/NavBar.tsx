import LogoBarra from  '../assets/img/logo.png'
type Props = {
    cel:string
}

const NavBar = ({cel}:Props) => {
  return (
   <>
   {/*<!-- ======= Top Bar ======= -->*/}
   <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-center justify-content-md-between">

          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-phone d-flex align-items-center"><span>{cel}</span></i>
            <i className="bi bi-clock d-flex align-items-center ms-4"><span> Lunes - Lunes: 2PM - 4AM</span></i>
          </div>

          <div className="languages d-none d-md-flex align-items-center">
            <ul>
              <li>En</li>
              <li><a href="#">De</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/*<!-- ======= Header ======= -->*/}
     <header id="header" className="fixed-top d-flex align-items-cente">
  <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
    <a href="#" className="logo me-auto me-lg-0"><img src={LogoBarra} alt="" className="img-fluid"/></a>
    <h1 className="logo me-auto me-lg-0"><a href="<?php echo base_url();?>">MONARCABAR</a></h1>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Inicio</a></li>
        <li><a className="nav-link scrollto" href="#about">Sobre Nosotros</a></li>
        <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
        <li><a className="nav-link scrollto" href="#specials">Especialidad</a></li>
        <li><a className="nav-link scrollto" href="#events">Eventos</a></li>
        <li><a className="nav-link scrollto" href="#gallery">Galer&iacute;a</a></li>
        <li><a className="nav-link scrollto" href="#contact">Contactos</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  </div>
</header>{/*<!-- End Header -->*/}
   </>
  )
}

export default NavBar