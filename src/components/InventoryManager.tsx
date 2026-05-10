import { useEffect, useState } from "react";
import type { ProductStock } from "../types";
import { defaultStocks } from "../data/defaultData";

const InventoryManager = () => {

 const [stocks, setStocks] = useState<ProductStock[]>(() => {
  const saved = localStorage.getItem("stocks");

  if (saved && JSON.parse(saved).length > 0) {
    return JSON.parse(saved);
  }

  localStorage.setItem(
    "stocks",
    JSON.stringify(defaultStocks)
  );

  return defaultStocks;
});

  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    localStorage.setItem(
      "stocks",
      JSON.stringify(stocks)
    );
  }, [stocks]);

  const addStock = () => {
    if (!productName) return;

    setStocks([
      ...stocks,
      {
        id: Date.now(),
        productName,
        quantity
      }
    ]);

    setProductName("");
    setQuantity(0);
  };

  const deleteStock = (id: number) => {
    setStocks(
      stocks.filter(s => s.id !== id)
    );
  };

  return (
    <div className="card shadow-sm p-4">
      <h3 className="mb-3">Inventory Management</h3>

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

      <button
        className="btn btn-success mb-4"
        onClick={addStock}
      >
        Add Stock
      </button>

      <ul className="list-group">
        {stocks.map(s => (
          <li
            key={s.id}
            className="list-group-item d-flex justify-content-between"
          >
            {s.productName} ({s.quantity})

            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteStock(s.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManager;