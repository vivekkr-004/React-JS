import "./Product.css"
// props is the object
// function Product (props) {
function Product({ title, price }) {
    let styles = { backgroundColor : price > 30000 ? "peru" : "" };
    return (
        <div className="Product" style = {styles}>
            <h3>{title}</h3>
            <h5> price : {price}</h5>
            {price > 30000 && <p>"Discount of 5%"</p>}
        </div>
    );

}

export default Product;