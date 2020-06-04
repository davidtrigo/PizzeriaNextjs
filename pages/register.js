import Input from '../components/input'
import { USERVALIDATOREGISTER } from '../app/validators/uservalidator'
import getBuilderProp from '../app/application/validatorbuilder'
import { useForm } from 'react-hook-form'
import Router from 'next/router'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useState } from 'react'
import { set } from 'idb-keyval';

export default function Register() {
    const [send, sendState] = useState(false)
    const { handleSubmit, register, errors } = useForm();
    const validators = {
        validator: getBuilderProp({ USERVALIDATOREGISTER }).USERVALIDATOREGISTER,
        register,
        errors
    }

    async function onSubmit(data) {
        try{
            const user ={
                name :data.name,
                email :data.email,
                password :data.password
          
         }
         const response = await fetch('/api/register',{
             method:"POST",
             headers:{
                 "content-type":'application/json'
             },
             body:JSON.stringify(user)
         })
        const userLogin = await response.json();
        
          await set('user', userLogin);
         Router.push('/')
        }
        finally{
            sendState(false);
        }
    }
    function linear() {
        if (send) {
            return (<LinearProgress />)
        }
        return null;
    }

        return (
        <>
           
           {linear()}
            <form className="container" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input label="Name*" required type="text" name="name" validators={validators} />
                <Input label="Email*" required type="text" name="email" validators={validators} />
                <Input label="Password*" required type="password" name="password" validators={validators} />
                <div className="button-container">
                    <Button type="submit" variant="contained"  size="small" color="primary">
                        Register
                </Button>
                </div>

            </form>
            <style jsx>{`
            .container{
                display:grid;
                grid-template-rows: repeat(3,auto);
                max-width:33%;
                margin:auto;
                grid-gap:0.5rem;
            }
            .button-container{
                display:flex;
                justify-content:flex-end;
            }
        `}
            </style>

        </>

    )


}