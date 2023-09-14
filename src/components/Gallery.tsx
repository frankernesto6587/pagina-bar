import PhotoGallery from "./PhotoGallery"
import photo1 from "../assets/img/gallery/gallery1.jpg"
import photo2 from "../assets/img/gallery/gallery2.jpg"
import photo3 from "../assets/img/gallery/gallery3.jpg"
import photo4 from "../assets/img/gallery/gallery4.jpg"
import photo5 from "../assets/img/gallery/gallery5.jpg"
import photo6 from "../assets/img/gallery/gallery6.jpg"
import photo7 from "../assets/img/gallery/gallery7.jpg"
import photo8 from "../assets/img/gallery/gallery8.jpg"


export const Gallery = () => {
  return (
    <>
          <section id="gallery" className="gallery">

<div className="container" data-aos="fade-up">
  <div className="section-title">
    <h2>Galer&iacute;a</h2>
    <p>Algunas fotos de nuestro bar</p>
  </div>
</div>

<div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

  <div className="row g-0">

    <PhotoGallery photo={photo1}/>
    <PhotoGallery photo={photo2}/>
    <PhotoGallery photo={photo3}/>
    <PhotoGallery photo={photo4}/>
    <PhotoGallery photo={photo5}/>
    <PhotoGallery photo={photo6}/>
    <PhotoGallery photo={photo7}/>
    <PhotoGallery photo={photo8}/>
  </div>

</div>
</section>
    </>
  )
}
