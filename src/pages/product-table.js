import { useState } from "react";
import Header from "./header";
import ProductList from "./product-list";

const productData = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Vegetables", price: "$5", stocked: false, name: "Potato" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Fruits", price: "$1", stocked: true, name: "Banana" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]

export default function ProductTable() {
    const [onlyShowProductsInStock, setShowProductsInStock] = useState(false);
    const [searchText, setSearchText] = useState('');

    const handleOnCheckChange = (e) => {
        setShowProductsInStock(e.target.checked);
    }
    const handleOnSearch = (e) => {
        setSearchText(e.target.value);
    }
    return <>
        <div>
            <Header showProductInStock={onlyShowProductsInStock} onCheckChange={handleOnCheckChange} searchText={searchText} onSearch={handleOnSearch} />
        </div>
        <div>
            <ProductList productData={productData} onlyShowProductInStock={onlyShowProductsInStock} searchText={searchText} />
        </div>
    </>
}