import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export async function getServerSideProps(){
  const res = await fetch('https://fakestoreapi.com/products') // https://nextjs-monorepo-e-commerce.vercel.app/
  const data = await res.json()

  return { props: {data}}
}

export function textLength(){
    const cutText = (text, maxLength) => {
        if (text.length > maxLength){
            return text.substring(0, maxLength) + '....';
        }
        return text;
    }

    return cutText
}


export function forWishlist(){
    const [wishlist, setWishlist] = useState([])

    const handleWishlist = (product) => {
        setWishlist((prevWishlist) => [...prevWishlist, product])
        
        if(handleWishlist == 0){
            return <h1>tidak ada</h1>
        }
    }
    

    return {handleWishlist, wishlist};
}


export default function index({data}){

    const [selectCategory, setSelectCategory] = useState('all');
    const [cart, setCart] = useState([])

    
    const {handleWishlist, wishlist} = forWishlist()
    
    
    
    // const router = useRouter();

    // const filteredProduct = filterProduct();
    
    
    const filterProductCategory = () => {
        if (selectCategory == 'all'){
            return data;
        }else if (selectCategory == 'cart'){
            return cart
        }else if(selectCategory == 'wishlist'){
            return wishlist;
        }else {
            return data.filter(data => data.price <= selectCategory)
        }
    }

    const handleButtonCart = (value) => {
      setSelectCategory(value)
    }

    console.log(selectCategory)
    
    
    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    }
    
    const cutText = textLength()
    
    
    
    const [searchProduct, setSearchProduct] = useState('')

    const handleSearch = (event) => {
        setSearchProduct(event.target.value)
    }
    

    const getFilter = () => {
        const getFilterCategory = filterProductCategory()
        return getFilterCategory.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
        )
    }

    const filterProduct = getFilter()


    const [countCart, setCountCart] = useState(0)

    const handleCount = () => {
      setCountCart(countCart + 1)
    }
    
    
   
   


  return(<>
    
    
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet" />
    

<nav class=" border-gray-200 bg-gray-900 text-white">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://i.postimg.cc/5tZLNR0T/moon-18012836.png" class="h-8" alt="DreamStore Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dream Store</span>
  </a>
  <div class="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span class="sr-only">Search</span>
    </button>
    <div class="relative hidden md:block">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" onChange={handleSearch} class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div class="relative mt-3 md:hidden">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
        
      </div>
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white float-end">
        <li>
          <a href="/" class="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <Link href={'/men'}>
            <button class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Men</button>
            </Link>
        </li>
        <li>
          <Link href={'/women'}  class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Woman</Link>
        </li>
        <li>
          <Link href={'/jewelery'}  class="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Jewelery</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>


   

    <div className="flex grid-cols-12 mt-3 float-end gap-2 mb-3 justify-between">

    <div>
    <i class='fa-solid fa-cart-shopping p-3 text-2xl'  onClick={() => handleButtonCart('cart')}><span className=" text-lg">{`${countCart < 1 ? '' : `(${countCart})`}`}</span></i>
    </div>
    
   <div>
    
    <select value={selectCategory} className=" float-end border border-black rounded-lg" onChange={(e) => setSelectCategory(e.target.value)}>
        <option value="all" selected>Semua</option>
        <option value="100">Di Bawah 100</option>
        <option value="200">Di Bawah 200</option>
        <option value="cart">Cart</option>
        <option value="wishlist">Wishlist</option>
    </select>
   
   </div>

    </div>
    

   

    


  
    
    <div className="flex items-center justify-center min-h-screen container mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
        {/* CARD */}
    {filterProduct.map((product) => {
     
        const cekCart = cart.some((item) => item.id == product.id)

        const cekWishlist = wishlist.some((item) => item.id == product.id )

        
       
        
        
        return(

            
            <div className="rounded-xl shadow-lg">
        <div className="p-5 flex flex-col h-full justify-between">
            <div className="rounded-xl overflow-hidden flex justify-center">
            <Link href={`/${product.id}`}>
                <img src={product.image} className=" w-auto h-48 object-cover"></img>
        </Link>
            </div>
            <h5 className="text-2xl md:text-3xl font-medium mt-3">{cutText(product.title, 15)}</h5>
            {/* <p className="text-slate-500 text-lg mt-3 text-left">{ cutText(product.description, 50)}</p> */}
            <p className=" text-slate-950 text-xl font-bold mt-3">$ {product.price}</p>
            <div className="grid grid-cols-5 container gap-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3"> 
          
       
            {/* TOMBOL CART */}
            <button onClick={() => [handleAddToCart(product,), handleCount()]} className={`text-center ${cekCart ? 'bg-green-400' : 'bg-blue-400'} text-black-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300`}>{cekCart ? <i class='fa-solid fa-check'></i> : <i class='fa-solid fa-cart-shopping'></i>}</button>
            {/* TOMBOL WISHLIST */}
            <button onClick={() => handleWishlist(product)} className={`text-center ${cekWishlist ? 'bg-green-400' : 'bg-blue-400'} text-black-700 py-2 rounded-lg font-semibold mt-4 hover:bg-green-300`}>{cekWishlist ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</button>
            {/* TOMBOL LINK */}
            </div>
            <button className=" text-center rounded-lg bg-blue-400 mt-2 text-2xl font-semibold text-slate-700">DETAIL</button>
            </div>
        </div>
        )
    
        
            })}
        {/* Pentutup CARD */}
        </div>
        {/* penutup grid */}
    </div>


  
        





            

            <Footer/>
        

       
    


    

            <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>
  </>)
}