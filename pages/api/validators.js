import handler from '../../app/middelwares/nextconnect'
import getValidators from '../../app/application/validatorservice';

handler.get(async (req,res)=>{
    const validators = await getValidators();
    res.json(validators);
})


export default handler;