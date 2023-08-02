import {useState, useMemo, useRef } from "react";
import Content from "./Content";
function App() {
 
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()
  
    const handleSubmit =()=> {
      setProducts([...products, {
        name,
        price: +price
      }])
      setName('')
      setPrice('')

      nameRef.current.focus()
    }

    const total = useMemo(()=> {
      const result = products.reduce((result, prod)=> result+prod.price, 0)
      console.log('Tinh toan lai')
      return result
    }, [products])
    return (
        <div style={{padding:"20px 10px"}}>
          <input
            ref={nameRef} 
            value = {name}
            placeholder="Enter name ..."
            onChange = {e=> setName(e.target.value)}
          />
          <br/>
          <input 
            value = {price}
            placeholder="Enter price ..."
            onChange = {e=> setPrice(e.target.value)}
          />
          <br/>
          <button onClick={handleSubmit}>Add</button>
          <br/>
          Total: {total}
          <ul>
            {products.map((product, index) =>(
              <li key={index}>{product.name} - {product.price}</li>
            ))}
          </ul>
        </div>
    )
    // <div className="App" style={{padding:20}}>
    // </div>
  
}

export default App;
