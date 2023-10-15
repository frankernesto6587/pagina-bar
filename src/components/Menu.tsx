import { useFetchProducts } from '../hooks/useProducts2';
import { DotLoader } from "react-spinners";
import Producto from './Producto';

const Menu = () => {

  const { data, isLoading, isError } = useFetchProducts();

  if (isLoading) return <div className="flex justify-center items-center h-screen"><DotLoader color="#3936d6" /></div>;
  if (isError) return <h1>Error...</h1>;

  return (
    <>

      <section id="menu" className="menu section-bg">
        <div className="container" data-aos="fade-up">


          <div className="section-title">
            <h2>Menu</h2>
            <p>Check Our Tasty Menu</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="menu-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-starters">Starters</li>
                <li data-filter=".filter-salads">Salads</li>
                <li data-filter=".filter-specialty">Specialty</li>
              </ul>
            </div>
          </div>

          <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
            {
              data.categorias[3].productos.map((producto)=>{
                return <Producto producto={producto}/>
              })
            }

            

          </div>

        </div>
      </section>
    </>
  )
}

export default Menu