import { useState } from "react";

const products = [
    {id:1, name:"Traktorek", price: 15},
    {id:2, name:"Motorek", price: 32.99},
    {id:3, name:"Rowerek", price: 21.37},
]
const ProductForms = () =>{

        const [name,setName] = useState("");
        const [price, setPrice] = useState(0)

        function submithandler(e){

            e.preventDefault()
            const product = {
                id: Math.random(),
                name: name,
                price: price,
            }

            product.push(product);
            console.log(products);
            setName("");
            setPrice("");
        }

    return(
        <form>
            <input type="text" placeholder="Nazwa Produktu" 
                value={name} onChange={e=> setName(e.target.value)} />
            <input type="number" placeholder="Cena Produktu" 
                value={price} onChange={e=> setPrice(e.target.value)} />
            <button type="submit">Dodaj produkt</button>
        </form>
    )
}
export default ProductForms;