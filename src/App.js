import { useStore, actions } from "./store"

function App(){
  const [state,dispatch] = useStore()
  const {todos, todoInput} = state

  const handleAdd =() => {
    dispatch(actions.addToDo(todoInput))
  }

  return (
 
      <div style={{padding:20}}>
        <input 
          value= {todoInput}
          placeholder="Enter todo..." 
          onChange = {e=> {
            dispatch(actions.setToDoInput(e.target.value))
          }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo,index) => (

              <li key={index}>{todo}</li>
            )
            )}
      </div>

   
  )
}

export default App