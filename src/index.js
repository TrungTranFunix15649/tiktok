import React from 'react' // 
import ReactDOM from 'react-dom/client' // 

// Tạo component App
function App() {
    return (
        <div>
            <h1>Xin chào anh em F8!</h1>
        </div>
    )
}

// Render component App vào #root element of React@17
// ReactDOM.render(<App />, document.getElementById('root'))

// React@18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
