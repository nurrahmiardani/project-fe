import { createContext, useContext, useReducer, useState, useEffect } from "react"
import faker from 'faker'
import { cartReducer } from "./Reducers";

const Cart = createContext()

export default function Context ({children}) {

    const [listProduct, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://6188b1aad0821900178d74be.mockapi.io/IkanAirLaut")
        .then((Response) => Response.json())
        .then((result) => setProducts(result));
    }, []);
    
    [listProduct].map((item) => {
        console.log(item.Nama);
      });

    const product = listProduct.map((item) => ({
        id: item.id,
        name: item.Nama,
        price: item.Harga,
        image: item.Img,
        inStock: 0,
        fastDelivery: false,
        // ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));

    // console.log(product)

   
    // const product = [...Array(20)].map (() => ({
    //     id : faker.datatype.uuid(),
    //     name : faker.commerce.productName(),
    //     price : faker.commerce.price(),
    //     image : faker.random.image()
    // }));
    // console.log(product)
    console.log(product)
    const [state, dispatch] = useReducer (cartReducer, {
        product : product,
        cart : []
    })

    // console.log(dispatch)
    console.log(state)
    return (
        <Cart.Provider value = {{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
};

export function CartState () {
    return useContext(Cart )
}