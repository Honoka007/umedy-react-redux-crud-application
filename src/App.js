import React from 'react';

const App = () =>{
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Haneko", age: 20},
    { name: "NoName"}
  ]
  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}


const User = (props) => {
  return <div>
    This is {props.name}! I am {props.age} years old.
    </div>
}

User.defalutProps = {
  age: 30
}

export default App;
