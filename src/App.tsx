import { Suspense, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<span>loading</span>}>
      <div>111</div>
      {/* <Router>
        <Route key="/home" path="/home" component={Home}></Route>
        <Route key="/about" path="/about" component={About}></Route>
      </Router> */}
    </Suspense>
  )
}

export default App
