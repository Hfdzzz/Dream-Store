import Header from "@/component/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";


export async function getServerSideProps(context){

    const {slug} = context.params;

   

    const res = await fetch(`https://fakestoreapi.com/products/${slug}`)

    

    const data = await res.json();

    return { props: {data}}

    
}


export default function slug({data}){

   
    const [quantity, setQuantity] = useState(0)

    const handleQuantity = (event) => {
        setQuantity(event.target.value)
    }
    

    const [confirm, setConfirm] = useState(false)

    const openConfirm = () => {
        setConfirm(true)
        console.log('kebuka')
    }

    const closeConfirm = () => {
        setConfirm(false)
        console.log('tertutup')
    }

    const buyConfirm = () => {
        setConfirm(false)
        alert('berhasil')
    }

    let hitung = quantity * data.price


    

    console.log(quantity)

    return(<>

    <Header/>
    
    <div>
        <div className="grid grid-cols-1 px-40 py-20 sm:grid-cols-1 lg:grid-cols-2">
            <div>
                <img src={data.image} className="w-6/12 h-auto"></img>
            </div>
            <div className="    ">
                
                <p className=" text-black font-bold">{data.title}</p>
                <p className="text-black">{data.description}</p>
            <br></br>
                <p className=" text-black font-bold">$ {data.price}</p>
            <input type="number" placeholder="Quantity" onChange={handleQuantity} className="border rounded-md"></input>
            <br></br>
            <br></br>
            
            <button type="submit" className=" bg-blue-900 text-white hover:bg-blue-200 py-1 px-7 hover:text-black rounded-md" onClick={openConfirm}>BUY</button>
            </div>
        </div>
    </div>

    {confirm && (
    <div className=" border-2 box-content h-48 w-6/12 rounded-md m-auto absolute top-48 left-80 bg-white">
        <div className=" px-3 py-1">
        <p>Are You Sure ?</p>
        <hr></hr>
        <p>{data.title}</p>
        <br></br>
        <strong>{quantity} x  $ {data.price}</strong>
        <br></br>
        <p>$ {hitung}</p>
        <br></br>
        <div className="grid grid-cols-2 lg:grid-cols-2 float-end gap-2 justify-between">
        
        <button type="submit" className="bg-green-400 rounded-md text-xl text-white font-semibold " onClick={buyConfirm}>BUY</button>
        
        <button typeof="submit" className="bg-red-400 rounded-md text-xl text-white font-semibold px-3" onClick={closeConfirm}>Cancel</button>
        </div>

        </div>
    </div>

)}


    
    </>)

    
}