import Header from "@/component/Header"
import Head from "next/head"
import Link from "next/link"



export async function getServerSideProps(){
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    return {props: {data}}
}



export default function women({data}){



    return(<>

    <Header/>

<div className="flex items-center justify-center min-h-screen container mx-auto">
    {/* Grid */}
    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
    {data.map((product) => {
       return product.category == "women's clothing" ? (
        <div key={product.id} className="rounded-xl shadow-lg">
                    <div className="p-5 flex flex-col h-full justify-between">
                        <div className="rounded-xl overflow-hidden flex justify-center">
                            <Link href={`/${product.id}`}>
                                <img src={product.image} className="w-auto h-48 object-cover" alt={product.title} />
                            </Link>
                        </div>
                        <h5 className="text-2xl md:text-3xl font-medium mt-3">{product.title}</h5>
                       
                        <p className="text-slate-950 text-xl font-bold mt-3">$ {product.price}</p>
                        <div className="grid grid-cols-5 gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3">
                            {/* TOMBOL CART */}
                            <button className="text-center bg-blue-400 text-black-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            {/* TOMBOL WISHLIST */}
                            <button className="text-center bg-blue-400 text-black-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300">
                                <i className="fa-regular fa-heart"></i>
                            </button>
                        </div>
                        <button className="text-center rounded-lg bg-blue-400 mt-2 text-2xl font-semibold text-slate-700">DETAIL</button>
                    </div>
                </div>
            ) : null;
    })}
     </div>
</div>
    
    </>)
}