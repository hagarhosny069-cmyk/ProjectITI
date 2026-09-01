import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">

                <Link className="navbar-brand" to="/">
                    Product Dashboard
                </Link>

                <div className="navbar-nav">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/products">
                        Products
                    </Link>

                    <Link className="nav-link" to="/products/details">
                        Product Details
                    </Link>

                </div>

            </div>
        </nav>
    );
}