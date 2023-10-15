import { Producto } from "../libs/interfaces"

type Props = {
    producto: Producto
}
const Producto = ({ producto }: Props) => {
    return (
        <div className="col-lg-6 menu-item filter-starters">
            <img src={`http://api.monarcabar.com/images/${producto?.id}.png`} className="menu-img" alt="" />
            <div className="menu-content">
                <a href="#">{producto.name}</a><span>${producto.list_price}</span>
            </div>
            <div className="menu-ingredients">

                <details>
                    <summary>{producto.description.length > 90 ? producto.description.substring(0, 80) + " ...": producto.description}</summary>
                    {producto.description.length > 90 ? producto.description.substring(80) : producto.description}
                </details>
            </div>
        </div>
    )
}

export default Producto