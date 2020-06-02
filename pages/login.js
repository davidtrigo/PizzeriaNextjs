import Input from '../components/input'
import { USERVALIDATOLOGIN } from '../app/validators/uservalidator'
import getBuilderProp from '../app/application/validatorbuilder'
import { useForm } from 'react-hook-form'
import { keys, set, get } from 'idb-keyval';
import Router from 'next/router'

export default function Login() {


    const { handleSubmit, register, errors } = useForm();
    const validators = {
        validator: getBuilderProp({ USERVALIDATOLOGIN }).USERVALIDATOLOGIN,
        register,
        errors
    }

    async function onSubmit(data) {
        const response = await fetch('/api/login', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(data)
        })
        const user =  await response.json();
        await set('user', user);
        Router.push('/')


    }
    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Email * :
                <Input type="text" name="email" validators={validators} />
            </label>
            <label>
                Password * :
                <Input type="password" name="password" validators={validators} />
            </label>
            <button type="submit">Login</button>

        </form>
    )
}