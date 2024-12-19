import { use } from 'react'
import data from '../data/productos.json'
import PedirProductos from './PedirProductos'
import ItemList from './ItemList'


export default function ItemListContainer() {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        pedirproductos().then((res) => {
            setProductos = res
        })
    }, [])



    return (
        <div>
            <ItemList key = {productos.id} productos={productos}/>
        </div>
    )
}