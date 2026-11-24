import "./Product.css"
// props is the object
// function Product (props) {
function Product ({title , price , features = []  }) { // using destructuring -> more easy way
    const list = features.map ((ele , index) => <li key = {index}>{ele}</li>)
    // key help to uniquly identify each element through index.
    // console.log(features)
    // console.log(props); 
    return (
        <div className="Product">
            {/* <h3>{props.title}</h3>*/ }
            <h3>{title}</h3>
            <h5> price : {price}</h5>
            <p>{list}</p>

        </div>
    );
}

export default Product;