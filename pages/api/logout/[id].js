import handler from '../../../app/middelwares/nextconnect'
import services from '../../../app/middelwares/service'
import SessionService from '../../../app/application/sessionservice';

handler.post(services(SessionService),async (req,res)=>{
    await req.service.remove(req.query.id);
    res.json('');
})


export default handler;