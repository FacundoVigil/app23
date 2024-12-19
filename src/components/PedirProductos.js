import data from '../data/productos.json'


const pedirproductos = () => {
    return new Promise((resolve, reject) => {
        resolve(data)
    })
}

export default pedirproductos