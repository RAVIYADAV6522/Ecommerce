import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://zuveesbackend.onrender.com/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Product Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 border border-gray-200">Name</th>
                <th className="p-4 border border-gray-200">Code</th>
                <th className="p-4 border border-gray-200">Category</th>
                <th className="p-4 border border-gray-200">Quantity</th>
                <th className="p-4 border border-gray-200">Image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-4 border border-gray-200">{product.name}</td>
                  <td className="p-4 border border-gray-200">{product.code}</td>
                  <td className="p-4 border border-gray-200">
                    {product.category?.name || "N/A"}
                  </td>
                  <td className="p-4 border border-gray-200">{product.quantity}</td>
                  <td className="p-4 border border-gray-200">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
