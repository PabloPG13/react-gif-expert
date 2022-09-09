import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    console.log(categories);
    // setCategories(cat => [...cat,'Valorant']);
  }

  return (
    <>
      <h1>Gif expert app</h1>

      
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      
      {
        categories.map((category) => 
          (
            <GifGrid 
              key={category} 
              category={category}
            />
          )
        )
      }
      
      
    </>
  )
}