
export default function Register() {
 
    async function handlerSubmit(ev){
        ev.preventDefault();
        const user ={
            name:ev.target.name.value,
            email:ev.target.email.value,
            password:ev.target.password.value
        }
        const response = await fetch('/api/register',{
            method:"POST",
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(user)
        })
     
        console.log(await response.json())
    }
   
    return (
   
        <form onSubmit={handlerSubmit}>
            <label>
                Nombre*:
                <input id="name" name="name" />
            </label>
            <label>
                Email*:
                <input id="email" name="email" />
            </label>
            <label>
                Password*:
                <input id ="password" type="password" name="password" />
            </label>
            <button type="submit">Register</button>   

        </form>
    )
}