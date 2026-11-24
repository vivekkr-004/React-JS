import Product from "./Product";
function ProductTab() {


    return (
        <>
            <Product title = "Laptop" price = {30000} ></Product>
            <Product title = "Mobile" price = {40000} ></Product>
            <Product title = "TV" price={1}   ></Product>
        </>
    );
}

export default ProductTab;

// React props -> we pass data to parent component and child component recieve and display it.
// --> it works like a js function argument
// --> it makes components dynamic and reusable. 