
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'

export const Navbar = () =>{
    return (
        <div className="Navbar">
        <ul className = "lista">
            <li className = "lista__Elemento"><a className = "lista__click" href = "#">Estadisticas</a></li>
            <li className = "lista__Elemento"><a className = "lista__click" href = "#">Producto</a></li>
            <li className = "lista__Elemento"><a className = "lista__click" href = "#">Mensaje</a></li>
            <li className = "lista__Elemento"><a className = "lista__click" href = "#">Ventajas</a></li>
        </ul>
        <CartWidget />
    </div> 
    );
}

export default Navbar;