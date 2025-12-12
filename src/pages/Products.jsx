import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth'
import ModalView from '../components/ModalView'

const Products = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [search, setSearch] = useState("")

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )

    useEffect(() => {
        if (!isLoggedIn()) navigate("/login")
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    function deleteProduct(id) {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
            .then(data => {
                console.log("Deleted", data)
                setProducts(prev => prev.filter(p => p.id !== id))
            })
    }

    return (
        <div className={"p-6 bg-slate-100 min-h-screen"}>

            <input
                type="text"
                placeholder="Search..."
                className="w-full max-w-xs mb-4 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                onChange={(e) => setSearch(e.target.value)}
            />

            <table className="w-full bg-white border border-slate-300 rounded-lg shadow">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="py-2 px-3 text-left">Title</th>
                        <th className="py-2 px-3 text-left">Price</th>
                        <th className="py-2 px-3 text-left">Description</th>
                        <th className="py-2 px-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.length === 0 ? "No Data Found" : (
                        filtered.map(product => (
                            <tr key={product.id} className="border-b border-slate-200">
                                <td className="py-2 px-3">{product.title}</td>
                                <td className="py-2 px-3 font-medium">${product.price}</td>
                                <td className="py-2 px-3 text-slate-700">
                                    {product.description.slice(0, 50)}...
                                </td>

                                {/* Actions */}
                                <td className="py-2 px-3 flex gap-2">

                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="px-3 cursor-pointer py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm"
                                    >
                                        View
                                    </button>

                                    <button
                                        onClick={() => console.log("Update", product)}
                                        className="px-3 cursor-pointer py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => deleteProduct(product.id)}
                                        className="px-3 cursor-pointer py-1 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm"
                                    >
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            {selectedProduct && (
                <ModalView product={selectedProduct} onClose={() => setSelectedProduct(null)} />
            )}
        </div>
    )
}

export default Products
