import "./Product.css"
// props is the object
// function Product (props) {
function Product({ title, price }) {
// let isDiscount = price > 30000 ? "Discount of 5%" : "";
// problem is it create extra node or p tag.  so we write it directly
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5> price : {price}</h5>
            {/* <p>{isDiscount}</p>  */}
            {price > 30000 ? <p>Discount of 5%</p> : null}
        </div>
    );

}

export default Product;