import handler from '../../../app/middelwares/nextconnect'
import { PIZZAVALIDATORREGISTER } from '../../../app/validators/pizzavalidator'
import services from '../../../app/middelwares/service'
import PizzaService from '../../../app/application/pizzaservice';
const connect = handler();

// TODO crear get by id 
connect.get(services(PizzaService), async (req, res) => {
    const pizza = await req.service.get(pizza.id);
    res.json(pizza);
})

// TODO crear put

connect.put(PIZZAVALIDATORREGISTER, services(PizzaService), async (req, res) => {
    await req.service.update(req.query.id, req.body);
    res.status(204).json("''");
})

// TODO add comment pizzas/id/comments (POST)
/*
connect.post(PIZZAVALIDATORREGISTER, services(PizzaService), async (req, res) => {
    const comment = await req.service.post(req.body);
    res.json(comment);
})*/



export default connect;






