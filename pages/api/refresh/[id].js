import handler from '../../../app/middelwares/nextconnect'
import services from '../../../app/middelwares/service'
import SessionService from '../../../app/application/sessionservice';

handler.post(services(SessionService),async (req,res)=>{
    const session = await req.service.update(req.query.id);
    res.json(session);
})


export default handler;