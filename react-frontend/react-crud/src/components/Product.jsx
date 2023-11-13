const Product = ({product}) => {
    return (
        <div className="bg-white rounded shadow-lg overflow-hidden">
            <img src={product.image} className="w-full h-28 object-cover"/>
            <div className="px-4 pt-2 pb-4">
                <h2 className="text font-semibold">{product.name}</h2>
                <div className="text-sm">Quantity: {product.quantity}</div>
                <div className="text-sm">Price ₹{product.price}</div>
            </div>
        </div>
    )
}

export default Product;