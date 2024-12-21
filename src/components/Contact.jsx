import { useForm } from "react-hook-form"

const Contact = () => {

    const {register, handleSubmit} = useForm()

    const enviar = (data) => {



    }

    return (    

        <div>    
            <h1>Contacto</h1>

            < form onSubmit={handleSubmit(enviar)}> 
                <input type = "text" placeholder="Ingrese su nombre" {...register("nombre")} />

                <input type = "email" placeholder="Ingrese su email" {...register("email")}/>

                <button type="submit"> Enviar</button>
            </form>

        </div>
    )    
}

export default Contact  