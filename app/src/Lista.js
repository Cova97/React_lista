import React, {useState} from "react";

const Lista = () => {
    const[lista, setLista] = useState("");

    const onChange = (e) =>{
        console.log(e.target.name);
        if(e.target.name === "lista"){
            setLista(e.target.value);
        }
    };

    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if(lista != ""){
            alert("Dato guardado")
        }
        else{
            alert("Ingrese dato")
        }
    };

    return(
        <>
            <form>
                <div>
                    <label>
                        <input type="text" name="lista" id="lista" value={lista} onChange={onChange}></input>
                    </label>
                </div>
                <button>Agregar</button>
            </form>
        </>
    )
};

export default Lista;