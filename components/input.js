import validatorjs from 'validator';
export default function Input({ type, name, value, validators }) {
    const { register, errors, validator } = validators;
    const validateField = validator.find(f => f.fields.includes(name));

    const validateFn = (value) => {
        let result = true;
        for (const v of validateField.validators) {
            let args = [value, ...v.args]
            result = validatorjs[v.validator].apply(null, args)
            if (!v.sanitize && !result) {
                return result;
            }
            if (v.sanitize) {
                value = result;
            }
        }
        return result;
    }

    if (validateField)
        return (
            <>
                <input type={type} ref={register({
                    validate: validateFn,


                })} name={name} value={value} />
                {errors[name] && validateField.message}
            </>
        )
    return (<input type={type} name={name} value={value} />)


}

 
 