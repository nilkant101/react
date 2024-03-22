import "./Product.css";
import Price from "./price";
// import ProductTab from "./ProductTab";

// function Product1({title, price, features}){
//     let styles = { backgroundColor: price > 30000 ? "lightgreen": null }
//     return(
//     <div className="Product" style={styles}>
//     <h3>{title}</h3>
//     {/* <h2>price : {price }</h2> */}
//     <p>{features.map((feature)=><li>{feature}</li>)}</p>
//     {/* <p>{price > 30000 ? "Discount 5%" : null} </p> */}
//     {/* {price > 30000 && <p>Discount 5%</p>} */}
//     </div>
//     );
// }


function Product1({ title, idx, features }){
    let oldPrice = [ "12,453", "11,000", "32,000" ]
    let newPrice = [ "8,453", "9,000", "18,000" ]
    return (
        <div className="Product">
            <p>{title }</p>
            <p>{features[idx][1]}</p>
            <p>{features[idx][2]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product1;