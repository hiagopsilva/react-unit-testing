import { useState } from 'react'

function App() {
  const [list, setList] = useState(['Hiago', 'Diego', 'Larissa']);
  const [newItem, setNewItem] = useState('');

  function addToList() {
    setTimeout(() => {
      setList(state => [...state, newItem])
    }, 500)
  }

  function removeFromList(value: string) {
    setTimeout(() => {
      setList(state => state.filter(item => item !== value))
    }, 500)
  }

  return (
    <>
      <input 
        type="text" 
        onChange={e => setNewItem(e.target.value)}
        placeholder="Novo item"
      />
      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map(item => (<li key={item}>
          {item}
          <button onClick={() => removeFromList(item)}>Remover</button>
        </li>))}
      </ul>
    </>
  )
}

export default App
