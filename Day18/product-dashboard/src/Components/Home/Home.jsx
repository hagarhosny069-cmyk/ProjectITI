import { useEffect, useState } from "react";

export default function Home() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="container py-5">

            <div className="text-center mb-5">
                <h1 className="display-4 fw-bold">
                    Welcome to Product Dashboard
                </h1>

                <p className="text-secondary">
                    Manage your products easily
                </p>
            </div>

            <div
                className="card shadow mx-auto text-center p-4"
                style={{ maxWidth: "400px" }}
            >

                <h3 className="mb-3">
                    Counter: {count}
                </h3>

                <button
                    className="btn btn-primary"
                    onClick={() => setCount(count + 1)}
                >
                    Add
                </button>

            </div>

        </div>
    );
}