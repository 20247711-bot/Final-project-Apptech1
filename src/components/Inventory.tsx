import { useState } from "react";
import type { ProductStock } from "../types";

const InventoryManager = () => {
  const [stocks, setStocks] = useState<ProductStock[]>([]);
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const addStock = () => {
    if (!productName) return;

    const newStock: ProductStock = {
      id: Date.now(),
      productName,
      warehouseId: 1,
      quantity,
    };

    setStocks([...stocks, newStock]);
    setProductName("");
    setQuantity(0);
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h4>Inventory Management</h4>

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

        <button className="btn btn-success" onClick={addStock}>
          Add Stock
        </button>

        <ul className="list-group mt-3">
          {stocks.map(s => (
            <li key={s.id} className="list-group-item">
              {s.productName} (Qty: {s.quantity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManager;