import Head from 'next/head'
import Layout from '../../components/layout'
import CustomList from '../../components/customlist'
import { useState, useEffect } from 'react'
import IngredientService from '../../services/ingredients'
import CustomListContext from '../../components/customlistcontext'
import Button from '@material-ui/core/Button';


export default function Add() {
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItems, setSeletedItems] = useState([])
    const [checked, setChecked] = useState([]);

//
    /*const [left, setLeft] = useState([]);
    const [right, setRight] = useState([]);
    const leftChecked = intersection(checked);
    const rightChecked = intersection(checked);*/
///


    useEffect(() => {
        async function getIngredients() {
            if (!loaded) {
                const ingredients = await IngredientService.getAll();
                setItems(ingredients);
                setLoaded(true);
            }
        }
        getIngredients()
    }, [])

    function not(a, b) {
        return a.filter((value) => b.indexOf(value) === -1);
    }

    function intersection(a, b) {
        return a.filter((value) => b.indexOf(value) !== -1);
    }

    function union(a, b) {
        return [...a, ...not(b, a)];
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
  
    };

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };




//TODO 
    const handleCheckedRight = () => {
        /*setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));*/
       
      

      };
    
      const handleCheckedLeft = () => {
        setChecked((left, concat(leftChecked)));
        setRigth(not(right, rightChecked));
        setChecked(not(checked, rightChecked));

      };
    

    const numberOfChecked = (items) => intersection(checked, items).length;

    const customlistcontext = { checked, handleToggle, handleToggleAll, numberOfChecked };

    return (
        <>
            <Head>
                <title>Create pizza</title>
            </Head>
            <Layout>
                <CustomListContext.Provider value={customlistcontext}>
                    <CustomList title="Ingredientes disponibles" items={items} />
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={items.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
          </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={selectedItems.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
          </Button>
                    <CustomList title="Ingredientes usados" items={selectedItems} />
                </CustomListContext.Provider>
            </Layout>
        </>
    )
}
