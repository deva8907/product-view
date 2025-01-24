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

    return <>
        <div>
            <Header showProductInStock={onlyShowProductsInStock}
                onCheckChange={(e) => handleOnCheckChange(e, setShowProductsInStock)}
                searchText={searchText}
                onSearch={(e) => handleOnSearch(e, setSearchText)} />
        </div>
        <div>
            <ProductList productData={productData}
                onlyShowProductInStock={onlyShowProductsInStock}
                searchText={searchText} />
        </div>
    </>
}

function handleOnCheckChange(e, setShowProductsInStock) {
    setShowProductsInStock(e.target.checked);
}

function handleOnSearch(e, setSearchText) {
    setSearchText(e.target.value);
}