import React from 'react';
import NavBar from './Navbar'


const App = (props: Props) => {
  return (
    <div>
      <NavBar />
     {props.children}
    </div>
  )

}
export default App;