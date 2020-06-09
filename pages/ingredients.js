import Head from 'next/head'
import Layout from '../components/layout'
import MaterialTable from 'material-table'
import { useState, useEffect } from 'react';
import IngredientService from '../services/ingredients';
import tableIcons from '../components/tableicon';

export default function Ingredients() {
  const [loaded, setLoaded] = useState(false);
  const [columns, _] = useState([
    {
      name: "name",
      field: "name",
    },
    {
      name: "price",
      field: "price",
      type: "numeric"
    }
  ])
  const [data, setData] = useState([]);

  async function getIngredients() {
    const data = await IngredientService.getAll();
    setData(data);
    setLoaded(true);
  }
  useEffect(() => {
    if (!loaded) getIngredients()
  }, {})
  return (
    <>
      <Head>
        <title>Ingredientes</title>
      </Head>
      <Layout>
        <MaterialTable
          title="ingredientes"
          icons={tableIcons}
          columns={columns}
          data={data} />
      </Layout>
    </>
  )
}
