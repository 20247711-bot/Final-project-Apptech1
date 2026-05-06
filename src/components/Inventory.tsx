import { useState, useEffect } from "react";
import type { ProductStock } from "../types";

const InventoryManager = () => {
  const [stocks, setStocks] = useState<ProductStock[]>(() => {
    const saved = localStorage.getItem("stocks");
    return saved ? JSON.parse(saved) : [];
  });

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  const addStock = () => {
    if (!productName) return;

    setStocks([
      ...stocks,
      { id: Date.now(), productName, quantity }
    ]);

    setProductName("");
    setQuantity(0);
  };

  const deleteStock = (id: number) => {
    setStocks(stocks.filter(s => s.id !== id));
  };

  const updateStock = (id: number, newQty: number) => {
    setStocks(stocks.map(s =>
      s.id === id ? { ...s, quantity: newQty } : s
    ));
  };

  return (
    <div className="card p-3 shadow-sm">
      <h4>Inventory</h4>

      <input
        className="form-control mb-2"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-2"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button className="btn btn-success mb-3" onClick={addStock}>
        Add
      </button>

      <ul className="list-group">
        {stocks.map(s => (
          <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">

            <span>{s.productName}</span>

            <div>
              <input
                type="number"
                defaultValue={s.quantity}
                onBlur={(e) => updateStock(s.id, Number(e.target.value))}
                className="form-control d-inline w-auto me-2"
              />

              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteStock(s.id)}
              >
                Delete
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManager;