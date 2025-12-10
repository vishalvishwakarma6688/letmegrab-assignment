import React from 'react'

const Testimonial = () => {
    return (
        <section className="bg-white py-20 px-6">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                What Our Customers Say
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

                {[1, 2, 3, 4].map((n) => (
                    <div key={n} className="bg-slate-50 border border-slate-200 p-6 rounded-xl shadow-sm">
                        <p className="text-slate-700 italic mb-4">
                            "Amazing service, great prices & fast delivery! Highly recommended."
                        </p>
                        <h4 className="font-semibold text-slate-900">Customer {n}</h4>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default Testimonial
