import { CartWidget } from "../CartWidget/CartWidget";
export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/so-logo-simple-chico.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/category/armazon">Armazones</a></li>
                                <li><a className="dropdown-item" href="/category/sol">Lentes de Sol</a></li>
                                <li><a className="dropdown-item" href="/category/graduacion">Lentes con Gradución</a></li>
                                <li><a className="dropdown-item" href="/product">Todos</a></li>
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
                    <CartWidget />
                </div>
            </div>
        </nav>
    </>
  )
}
