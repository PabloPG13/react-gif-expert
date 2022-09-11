import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat,'Valorant']);
  }

  const onDeleteCategory = (e) => {
    
    const category = e.target.getAttribute('data-category');
    
    const index = categories.indexOf(category);

    if(index > -1){
      setCategories(categories.filter((cat) => cat !== category));
    }
  }

  return (
    categories && (
      <>
        <h1>Buscador de Gifs</h1>

        
        <AddCategory 
          // setCategories={setCategories}
          key="input"
          onNewCategory={onAddCategory}
        />
      
        {
          categories.map((category) => 
            (
              <>
                <button 
                  key={category + 'btn'} 
                  className='btn-delete'
                  data-category={category}
                  onClick={onDeleteCategory}>
                    
                X</button>

                <GifGrid 
                  key={category} 
                  category={category}
                />
              </>
            )
          )
        }
        
        
      </>
    )
  )
}