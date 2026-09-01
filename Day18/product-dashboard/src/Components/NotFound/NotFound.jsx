import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container py-5">

            <div className="text-center py-5">

                <i className="fa-solid fa-triangle-exclamation fa-5x mb-4"></i>

                <h1 className="display-1 fw-bold">
                    404
                </h1>

                <h2 className="mb-3">
                    Page Not Found
                </h2>

                <p className="text-secondary mb-4">
                    Sorry, the page you are looking for does not exist.
                </p>

                <Link to="/" className="btn btn-primary">
                    Back to Home
                </Link>

            </div>

        </div>
    );
}