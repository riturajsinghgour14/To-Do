import React from 'react'
import Navbar from './components/Navbar'
import ListGroup from './components/ListGroup'
import Form from './components/Form'

const App = () => {
  return (
    <>
     <Navbar/> 
     <div className='container p-5'>
        <Form/>
        <ListGroup/>
     </div>
    </>
  )
}

export default App
