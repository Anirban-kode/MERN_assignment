import { useState } from "react";

export default function ProductDetailsPage() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { 
            name: "Samsung s25 12GB RAM", 
            description: "This is a great product.", 
            price: "$50", 
            image: "https://images.samsung.com/is/image/samsung/assets/mm/2501/home/NEW_HOME_P1P2_Global_Merchandising_684x684_pc.jpg?$684_684_JPG$"
        },
        { 
            name: "LG m45", 
            description: "This is another amazing product.", 
            price: "$80", 
            image: "https://th.bing.com/th/id/OIP.GVo1iPhrPrikvWGW-tKkrAHaEL?w=277&h=180&c=7&r=0&o=5&pid=1.7"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center p-6 bg-green-600 text-white">
            <h2 className="text-3xl font-bold mb-4">Product List</h2>
            <div className="flex gap-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="p-4 border rounded-lg bg-white text-black shadow cursor-pointer hover:bg-gray-300"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded" />
                        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <div className="mt-6 p-6 border rounded-lg bg-white text-black shadow-lg w-1/3 text-center">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-40 h-40 object-cover rounded mx-auto" />
                    <h3 className="text-xl font-bold mt-4">{selectedProduct.name}</h3>
                    <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
                    <strong className="mt-2 block text-lg text-green-700">{selectedProduct.price}</strong>
                    <button 
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={() => setSelectedProduct(null)}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
}