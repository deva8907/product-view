export default function Header({ showProductInStock, onCheckChange, searchText, onSearch }) {
    return <>
        <div style={{ marginBottom: '1rem' }}>
            <input type="text" placeholder="Search product" value={searchText} onChange={onSearch} />
        </div>
        <div>
            <label>
                <input type="checkbox" value={showProductInStock} onChange={onCheckChange} />
                Only show products in stock
            </label>
        </div>

    </>
}