const       Item = ({producto}) => {
    return (
        <div>    
            <img src={producto.image} alt={producto.tittle} />
            <h2>{producto.tittle}</h2>
            <p>{producto.description}</p>
        </div>
    )
} 

export default Item