import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {doc, getDoc} from 'firebase/firestore'



const   ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams().id 

    useEffect(() => {
        
        const docRef = doc(db, "productos", id)
        getDoc(docRef).then((resp) => {
            setItem({...resp.data(), id: resp.id})
        })  
        
    }, [Id] )

    return (
        <div>
            {Item && <ItemDetail item = {item}/> }
        </div>
    )
} 