import "./Product.css"
// props is the object
// function Product (props) {
function Product ({title , price   }) { 
    if(price > 30000) {
        return (
            <div className="Product">
                <h3>{title}</h3>
                <h5> price : {price}</h5>
               <p>Discount of 5%</p>
    
            </div>
        );

    } else {
              return (
            <div className="Product">      
                <h3>{title}</h3>
                <h5> price : {price}</h5>
    
            </div>
        );
    }
    
}

export default Product;