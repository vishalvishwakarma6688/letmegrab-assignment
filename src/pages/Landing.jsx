// import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from 'react-responsive-carousel'

// import image1 from '../assets/IMG-20251210-WA0001.jpg'
// import image2 from '../assets/IMG-20251210-WA0002.jpg'
// import image3 from '../assets/IMG-20251210-WA0003.jpg'
// import image4 from '../assets/IMG-20251210-WA0004.jpg'
// import image5 from '../assets/IMG-20251210-WA0005.jpg'
// import image6 from '../assets/IMG-20251210-WA0006.jpg'
// import image7 from '../assets/IMG-20251210-WA0007.jpg'
// import image8 from '../assets/IMG-20251210-WA0008.jpg'
// import image9 from '../assets/IMG-20251210-WA0009.jpg'

// const images = [
//     image1, image2, image3, image4, image5,
//     image6, image7, image8, image9
// ]

// const Landing = () => {
//     return (
//         <>
//             <div style={{ maxWidth: "100vw", height: "80vh" }}>
//                 <Carousel
//                     autoPlay
//                     infiniteLoop
//                     showThumbs={false}
//                     showStatus={false}
//                     stopOnHover={false}
//                     interval={2500}
//                     swipeable
//                     emulateTouch
//                 >
//                     {images.map((img, i) => (
//                         <div key={i} style={{ height: "92vh" }}>
//                             <img
//                                 src={img}
//                                 alt={`slide-${i}`}
//                                 style={{
//                                     height: "100%",
//                                     width: "100%",
//                                     objectFit: "cover",
//                                 }}
//                             />
//                         </div>
//                     ))}
//                 </Carousel>
//             </div>

//             <section className="bg-slate-100 py-48">
//                 <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
//                     Why Choose Us?
//                 </h2>

//                 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

//                     <div className="bg-white shadow-md border border-slate-200 rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold text-blue-600 mb-3">
//                             High Quality Products
//                         </h3>
//                         <p className="text-slate-700">
//                             We provide a wide range of premium products with excellent reviews and trusted suppliers.
//                         </p>
//                     </div>

//                     <div className="bg-white shadow-md border border-slate-200 rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold text-blue-600 mb-3">
//                             Fast & Secure Delivery
//                         </h3>
//                         <p className="text-slate-700">
//                             Enjoy fast shipping and secure handling so your items arrive in perfect condition.
//                         </p>
//                     </div>

//                     <div className="bg-white shadow-md border border-slate-200 rounded-lg p-6 text-center">
//                         <h3 className="text-xl font-semibold text-blue-600 mb-3">
//                             Best Price Guarantee
//                         </h3>
//                         <p className="text-slate-700">
//                             We always offer competitive prices and amazing deals for our customers.
//                         </p>
//                     </div>

//                 </div>
//             </section>
//         </>
//     )
// }

// export default Landing


import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/IMG-20251210-WA0001.jpg'
import image2 from '../assets/IMG-20251210-WA0002.jpg'
import image3 from '../assets/IMG-20251210-WA0003.jpg'
import image4 from '../assets/IMG-20251210-WA0004.jpg'
import image5 from '../assets/IMG-20251210-WA0005.jpg'
import image6 from '../assets/IMG-20251210-WA0006.jpg'
import image7 from '../assets/IMG-20251210-WA0007.jpg'
import image8 from '../assets/IMG-20251210-WA0008.jpg'
import image9 from '../assets/IMG-20251210-WA0009.jpg'
import Testimonial from '../components/Testimonial'

const images = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9
]

const Landing = () => {
    return (
        <>
            <div style={{ maxWidth: "100vw", height: "91vh" }}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    stopOnHover={false}
                    interval={2500}
                    swipeable
                    emulateTouch
                >
                    {images.map((img, i) => (
                        <div key={i} className="h-[91vh]">
                            <img
                                src={img}
                                alt={`slide-${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>

            <section className="bg-slate-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Why Choose Us?
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white shadow-lg border border-slate-200 rounded-xl p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">
                            High Quality Products
                        </h3>
                        <p className="text-slate-700">
                            We provide a wide range of premium products with excellent reviews and trusted suppliers.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg border border-slate-200 rounded-xl p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">
                            Fast & Secure Delivery
                        </h3>
                        <p className="text-slate-700">
                            Enjoy fast shipping and secure handling so your items arrive in perfect condition.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg border border-slate-200 rounded-xl p-6 text-center hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold text-blue-600 mb-3">
                            Best Price Guarantee
                        </h3>
                        <p className="text-slate-700">
                            We always offer competitive prices and amazing deals for our customers.
                        </p>
                    </div>

                </div>
            </section>

            <section className="py-20 bg-white px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">

                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">10K+</h3>
                        <p className="text-slate-700 mt-2">Happy Customers</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">500+</h3>
                        <p className="text-slate-700 mt-2">Premium Products</p>
                    </div>

                    <div>
                        <h3 className="text-4xl font-bold text-blue-600">24/7</h3>
                        <p className="text-slate-700 mt-2">Customer Support</p>
                    </div>

                </div>
            </section>

            <section className="bg-slate-100 py-20 px-6">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                    Featured Products
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {[1, 2, 3].map((n) => (
                        <div key={n} className="bg-white shadow-md border border-slate-200 rounded-xl p-6 hover:shadow-xl transition">
                            <div className="h-40 bg-slate-200 rounded-md mb-4">
                            </div>
                            <h3 className="font-semibold text-slate-900">Product {n}</h3>
                            <p className="text-slate-700 text-sm mt-2">
                                Amazing quality and best price.
                            </p>
                            <button className="mt-4 cursor-pointer bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm">
                                View Details
                            </button>
                        </div>
                    ))}

                </div>
            </section>

            <Testimonial/>
        </>
    )
}

export default Landing
