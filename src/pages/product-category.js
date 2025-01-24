export default function ProductCategory({ product, categoryIndex }) {
    return <>
        <div key={categoryIndex} style={{ marginLeft: '4rem' }}>
            <h4>{product.category}</h4>
        </div>
    </>
}