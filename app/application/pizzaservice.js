const PizzaRepository = require('../infraestructure/pizzarepository')
const Pizza = require('../domain/pizza')
const { NotExistsError } = require('../utils/customerrors')
const IngredientRepository = require('../infraestructure/ingredientrepository')
const profit = require('../utils/profit')

class PizzaService {
    constructor() {
        this.repository = new PizzaRepository();
    }
    async create(dto) {
        dto = await this.sanitizeIngredients(dto);
        const pizza = Pizza.create(dto);
        return await this.repository.add(pizza)
    }
    async get(id) {
        const pizza = await PizzaRepository.get(id)
        if (!pizza) {
            throw new NotExistsError(`can't find pizza`)
        }
        await this.normalizePizza(pizza);
        return pizza;
    }
    async update(id, dto) {
        const pizza = await this.repository.get(id);
        if (!pizza) {
            throw new NotExistsError(`can't find pizza`)
        }
        dto = await this.sanitizeIngredients(dto);
        pizza.update(dto)
        return await this.repository.update(pizza);
    }
    async dispose() {
        await this.repository.dispose();
    }
    async sanitizeIngredients(dto) {
        const repositoryIngredient = new IngredientRepository();
        dto.ingredients.forEach((element, index) => {
            const ingredient = await repositoryIngredient.get(element.id);
            if (!ingredient) {
                throw NotExistsError(`ingredient ${element.name} not exists`)
            }
            const { id, price } = ingredient;
            dto.ingredients[index] = { id, price }
        });
        await repositoryIngredient.dispose();
    }
    /**  */
    async normalizePizza(dto) {
        dto.price = 0;
        const repositoryIngredient = new IngredientRepository();
        dto.ingredients.forEach((element, index) => {
            const ingredient = await repositoryIngredient.get(element.id);
            if (ingredient) {
                const { id, name, price } = ingredient;
                dto.ingredients[index] = { id, name };
                dto.price = dto.price + price;
            }
        });
        dto.price = profit(dto.price);
        await repositoryIngredient.dispose();
    }

 //TODO que exista la pizza o throw  x  
        //sino lanza un throw Notexist  x 
        // crear comentario   x
        // llamar a addComment del dominio de la pizza
        // guardar pizza

    async addComment(idPizza, dto) {
        if(!idPizza){
            throw NotExistsError ('pizza not exists')
        }
        const comment = Comment.create(dto);
        return 0;
        
    }
}

module.exports = PizzaService;