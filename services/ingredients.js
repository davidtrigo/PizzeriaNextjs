const url = '/api/ingredients';

class IngredientService {
    async getAll(){
        const response = await fetch(url);
        return await response.json();
    }
}



export default new IngredientService;