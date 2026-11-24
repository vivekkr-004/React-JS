export default function({oldprice , newPrice}) {
    let oldStyles = {
        textDecorationLine : "line-through",
    };

    let newStyles = {
        fontWeight : "bold",
    };

    let styles = {
        backgroundColor : "#e0c367", 
        height: "44px",
        borderBottomLeftRadius : "14px",
        borderBottomRightRadius : "14px",

    }
    return (
        <div style={styles} >
            <span  style={oldStyles}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
        
    )
}