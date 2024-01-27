import { CartWidget } from "./CartWidget";
export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="./src/assets/so-logo-simple-chico.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
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
