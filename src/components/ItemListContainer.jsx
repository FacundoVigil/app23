import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../firebase/firebase'

export default function ItemListContainer() {

    const [productos, setProductos] = useState([])

    const [titulo, setTitulo] = useState("Nuestros productos")

    const categoria = useParams().categoria


    useEffect(() => {

        const productosRef = collection(db, "productos")

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        get (productosref) .then((res) => {

            setProductos(
                res.docs.map((doc) => ({
                    return {...doc.data(), id : doc.id}
                }))
            )
            
        })

    }, [categoria]) 



    return (
        <div>
            <ItemList key = {productos.id} productos={productos} titulo = {titulo}/>
        </div>
    )
}