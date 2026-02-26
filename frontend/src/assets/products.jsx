import { useEffect, useState } from "react";

export default function Products() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // call backend directly; use full URL or configure Vite proxy
        fetch("/api/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setItems(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading products…</div>;
    if (error) return <div className="error">Failed to load: {error}</div>;

    return (
        <div className="products">
            <h2>Our Products</h2>
            {items.length === 0 ? (
                <p>No products available yet.</p>
            ) : (
                <ul>
                    {items.map((p) => (
                        <li key={p.id}>
                            <h3>{p.name}</h3>
                            <p>Price: ${p.price}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}; 