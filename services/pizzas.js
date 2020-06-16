const api = '/api/pizzas'
class PizzaClient {
    async get(id){
        const response = await fetch(`${api}/${id}`)
        return await response.json();
    }
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

    async update(id,data){
        return await fetch(`${api}/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

export default new PizzaClient();