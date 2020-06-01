
import { useRouter } from 'next/router';
import Input from '../components/input'
import { USERVALIDATOLOGIN } from '../app/validators/uservalidator'
import getBuilderProp from '../app/application/validatorbuilder'
import { useForm } from 'react-hook-form'


export default function Login() {

    const { handleSubmit, register, errors } = useForm();
    const validators = {
        validator: getBuilderProp({ USERVALIDATOLOGIN }).USERVALIDATOLOGIN,
        register,
        errors
    }
    //async function handlerSubmit(ev){
    async function onSubmit(ev) {
        ev.preventDefault();
        const user = {
            email: ev.target.email.value,
            password: ev.target.password.value
        }
        const response = await fetch('/api/login', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(user)
        })
        // grabar en indexdb
        //redireccionar
        console.log(await response.json())
    }

    const router = useRouter()

    const handleClick = (e) => {
        router.push('/register')
    }


    return (
        //   <form onSubmit={handlerSubmit}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email*:
                <Input type="text" name="email" validators={validators} />
            </label>
            <label>
                Password*:
                <input id="password" type="password" name="password" />
            </label>
            <button type="submit">Login</button>
            <div>  <button onClick={handleClick}> Registrar </button></div>

        </form>
    )
}