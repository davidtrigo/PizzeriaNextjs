const api = '/api/pizzas'
class PizzaClient {
    async add(data) {
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }
}

export default new PizzaClient();