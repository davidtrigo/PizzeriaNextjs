import handler from '../../app/middelwares/nextconnect'
import {USERVALIDATOLOGIN} from  '../../app/validators/uservalidator'
import services from '../../app/middelwares/service'
import UserService from '../../app/application/userservice';

handler.post(USERVALIDATOLOGIN,services(UserService),async (req,res)=>{
    const session = await req.service.login(req.body);
    res.json(session);
})


export default handler;