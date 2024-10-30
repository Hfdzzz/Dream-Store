
export const [searchProduct, setSearchProduct] = useState('')

export const handleSearch = (event) => {
    setSearchProduct(event.target.value)
}

export const getFilter = () => {
    const getFilterCategory = filterProductCategory()
    return getFilterCategory.filter((product) =>
    product.title.toLowerCase().includes(searchProduct.toLowerCase())
    )
}

export const filterProduct = getFilter()