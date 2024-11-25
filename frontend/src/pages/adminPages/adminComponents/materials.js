import { useEffect, useState } from "react";
import axios from "axios";

const RawMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get("https://zuveesbackend.onrender.com/api/materials"); // Adjust API URL
        setMaterials(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch raw materials. Please try again.");
        setLoading(false);
      }
    };

    fetchMaterials();
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
          <h2 className="text-lg font-semibold">Raw Materials Inventory</h2>
        </div>
        {materials.map((material) => (
          <div key={material.id} className="p-4 border-b border-gray-200">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              {material.name} (Code: {material.code})
            </h3>
            <div className="flex items-center mb-4">
              <img
                src={material.imageUrl}
                alt={material.name}
                className="h-24 w-24 object-cover rounded mr-4"
              />
              <div>
                <p className="text-gray-600">
                  <strong>Price:</strong> ${material.price}
                </p>
                <p className="text-gray-600">
                  <strong>Quantity Available:</strong> {material.quantity}
                </p>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-gray-600 mb-2">
              Products Using This Material:
            </h4>
            {material.products.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 border border-gray-200">Product ID</th>
                      <th className="p-4 border border-gray-200">
                        Quantity Used
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {material.products.map((product) => (
                      <tr key={product.id} className="hover:bg-gray-50">
                        <td className="p-4 border border-gray-200">
                          {product.productId}
                        </td>
                        <td className="p-4 border border-gray-200">
                          {product.quantityUsed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No associated products.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RawMaterials;
