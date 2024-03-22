import Product from './Product1.jsx';


function ProductTab(){
    let styles ={
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
    };

    let option = [
        ["hi-tech", "durable", "fast"],
        ["intuitive surface", "designed dor", "iPad pro"],
        ["bluetooth 5.3", "multiple free games","software "]
    ] 
    return(
        <div style={styles}>
       <Product title="windows"  features={option} idx={0}/>
        <Product title="iphone14" features={option} idx={1}/>
        <Product title="mackbook"  features={option} idx={2}/>
        </div>
    );
}

export default ProductTab;     