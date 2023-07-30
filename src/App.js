import { useState } from "react";

const courses = [
  {
    id:1,
    name: 'HTML CSS',
  },
  {
    id:2,
    name: 'JavaScript'
  },
  {
    id:3,
    name: 'ReactJS'
  }
]

function App() {
  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }
  const handleSubmit = () => {
    console.log ({ids:checked})
  }
      
  return (

    <div style={{padding:20}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}/>
          {course.name}
          </div>
      ))}
      <button onClick ={handleSubmit}>Register</button>
    </div>
    // <div className="App" style={{padding:20}}>
    // </div>
  );
}

export default App;
