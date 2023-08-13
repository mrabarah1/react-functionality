import { useState } from 'react'
import { values } from './data'


function App() {
  const [items, setItems] = useState(values);
    
  const removeItem = (id) => {
    const newitem = items.filter(item => item.id !== id);
    return setItems(newitem)
  }

  const refreshItem = () => {
    setItems(values);
  }

  const clearBtn = () => {
    setItems([])
  }

  return (
    <>
      <div className="section-center">
        <h2>Name of countries</h2>
        {items.map((item) => {
          const { id, country } = item;
          return (
            <div key={id}>
              <h4>{country}</h4>
              <button onClick={() => removeItem(id)}>delete</button>
            </div>
          );
        })}
      {items.length === 0 ? (
        <button className='btn' onClick={refreshItem}>refresh</button>
        ) : (
          <button className='btn' onClick={clearBtn}>clear</button>
          )}
          </div>
    </>
  );
}

export default App
