
import Head from 'next/head'
import Layout from '../../components/layout'
import { useState, useEffect } from 'react'
import IngredientService from '../../services/ingredients'
import TransferList from '../../components/transferlist'
import PizzaService from '../../app/application/pizzaservice'

 export default function Edit() {
    const [loaded, setLoaded] = useState(false);
    const [left, setLeft] = useState([]);
    const [right, setRight] = useState([])

    useEffect(() => {
        async function getIngredients() {
            if (!loaded) {
                const ingredients = await IngredientService.getAll();
                const pizza = await PizzaService.get(id);
                setRight(pizza.ingredients)
                setLeft(ingredients);
                setLoaded(true);
            }
        }
        getIngredients()
    }, [])

    const transferProps = {
        left,
        leftTitle: "Ingredientes",
        right,
        rightTitle: "Utilizados",
        setLeft,
        setRight,
    }

    return (
        <>
            <Head>
                <title>Crear pizza</title>
            </Head>
            <Layout>
                <TransferList {...transferProps} />
            </Layout>
        </>
    )
}
 