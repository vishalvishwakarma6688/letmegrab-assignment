import React from 'react'

const ModalView = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    {product.title}
                </h2>
                <img
                    src={product.image}
                    alt=""
                    className="w-40 mx-auto mb-4 object-contain"
                />
                <p className="mb-2 text-slate-800">
                    <strong className="text-slate-900">Price: </strong>
                    ${product.price}
                </p>

                <p className="mb-2 text-slate-800">
                    <strong className="text-slate-900">Category: </strong>
                    {product.category}
                </p>

                <p className="mb-4 text-slate-700">
                    <strong className="text-slate-900">Description: </strong>
                    {product.description}
                </p>
                <button
                    onClick={onClose}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default ModalView
