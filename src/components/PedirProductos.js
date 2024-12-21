import data from '../data/productos.json'


const pedirproductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(data)},500)
    })
}

export default pedirproductos

export const pedirItem = (id) => { 
    return new Promise((resolve, reject) => {

        const item = data.find(item => item.id === id)

        setTimeout(() => {
        resolve(data.find(item => item.id === id))},500)
    })
}