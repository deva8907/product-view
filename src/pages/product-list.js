import Product from "./product";
import ProductCategory from "./product-category";

export default function ProductList({ productData, onlyShowProductInStock, searchText }) {
    return <>
        <div key='header-div' style={{ display: 'flex', marginBottom: '-2rem' }}>
            <div key='name-div' style={{ marginRight: '5rem' }}>
                <h3>Name</h3>
            </div>
            <div key='price-div'>
                <h3>Price</h3>
            </div>
        </div>
        <div key='product-div'>
            {products(productData, onlyShowProductInStock, searchText)}
        </div>
    </>
}

function products(productData, onlyShowProductInStock, searchText) {
    let lastCategory = '';
    let categoryIndex = 0;
    return productData
        .sort((p1, p2) => {
            if (p1.category < p2.category) return -1;
            if (p1.category > p2.category) return 1;
            return 0;
        })
        .sort((p1, p2) => {
            if (p1.name < p2.name) return -1;
            if (p1.name > p2.name) return 1;
            return 0;
        })
        .filter(p => p.name.toLowerCase().includes(searchText.toLowerCase()))
        .map((product, index) => {
            const arr = [];
            if (lastCategory !== product.category) {
                arr.push(<ProductCategory product={product} index={categoryIndex} />);
                lastCategory = product.category;
                categoryIndex++;
            }
            if (product.stocked || !onlyShowProductInStock)
                arr.push(<Product product={product} index={index} />)

            return arr;
        });
}