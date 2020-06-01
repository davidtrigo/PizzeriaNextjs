import {useContext} from 'react';
import validatorjs from 'validator';
export default function Input({type,name,value,validators}){
    const {register,errors,validator} = validators;
    const validateField = validator.find(f=>f.fields.includes(name));
    const validateFn =(value)=>{
        validateField.validators.forEach(v => {
           let args = [value,...v.args]
           let result=validatorjs[v.validator].apply(null,args)
           console.log(result);
           //cuando sea validador y devueva false no validar nada mas
        });
        return true;
    }
    if(validateField) 
        return (
            <>
                <input type={type} ref={register({
                    validate : validateFn
                })} name={name} value={value}/>
                {errors[name] && validateField.message}
            </>
        )
    return(<input type={type} name={name} value={value}/>)

  
}