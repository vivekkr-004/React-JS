import "./Product.css"
// props is the object
// function Product (props) {
function Product ({title , price}) { // using destructuring -> more easy way
    // console.log(props); 
    return (
        <div className="Product">
            {/* <h3>{props.title}</h3>*/ }
            <h3>{title}</h3>
            <h5> price : {price}</h5>
        </div>
    );
}

export default Product;