import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/so-logo-simple-chico.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/category/armazon" className="dropdown-item">
                                            Armazones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/sol" className="dropdown-item">
                                            Lentes de Sol
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/graduacion" className="dropdown-item">
                                            Lentes con Gradución
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/product" className="dropdown-item">
                                            Todos
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quines somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Como llegar</a>
                            </li>
                        </ul>
                        <div style={{ marginLeft: 'auto' }}>
                            <Link to="/cart">
                                <CartWidget />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
