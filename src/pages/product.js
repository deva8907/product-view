export default function Product({ product, index }) {
    const labelColor = {
        color: product.stocked ? 'black' : 'red'
    }
    return <>
        <div key={index} style={{ display: 'grid', gridTemplateColumns: '8rem 1rem' }}>
            <label style={labelColor}>
                {product.name}
            </label>
            <label style={labelColor}>
                {product.price}
            </label>
        </div>
    </>
}