import React, {useState} from "react";

const Lista = () => {
    const[product, setProduct] = useState("");
    const[products, setProducts] = useState("");

    const onChange = (e) =>{
        console.log(e.target.name);
        if(e.target.name === "product"){
            setProduct(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(product);
        e.preventDefault();
        setProducts([...products, product])
    };
    
    return(
        <>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="product">Producto</label>
                    <input type="text" name="product" id="product" value={product} onChange={onChange}></input>
                </div>
                <button>Agregar</button>
            </form>
            <ul>
                {products.map((name, i) => {
                    return <li key={i}>{name}</li>;
                })}
            </ul>
        </>
    )
};

export default Lista;