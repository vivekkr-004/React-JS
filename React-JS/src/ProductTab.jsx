import Product from "./Product";
function ProductTab() {

    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent : "center",
        alignItem: "center",
        
    }

    return (
        <div style = {styles}>
            <Product title = "Logitech MX Master" index = {0} ></Product>
            <Product title = "Apple Pencile (2nd Gen)"  index = {1} ></Product>
            <Product title = "Zebronics Zeb-transformer"  index = {2} ></Product>
            <Product title = "Petronics Toad 23"  index = {3} ></Product>
        </div>
    );
}

export default ProductTab;

