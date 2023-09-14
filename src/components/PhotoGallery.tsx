

// Definir una interfaz para las props
interface PhotoGalleryProps {
  photo: string; // Supongo que 'photo' es una URL de imagen, por lo que lo declaré como una cadena (string).
}

const PhotoGallery = (props: PhotoGalleryProps) => {
  return (
    <>
      <div className="col-lg-3 col-md-4">
        <div className="gallery-item">
          <a href={props.photo} className="gallery-lightbox" data-gall="gallery-item">
            <img src={props.photo} alt="" className="img-fluid" />
          </a>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
