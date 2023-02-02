import { useState } from "react";
import Person from "./components/Person";

const app = () =>{
  // the first element is the state itself , the second element is the way to update the state
  const [theText ,setTheText] = useState('')
  const clickHandler = () => {
    setTheText('it changed!');
  }
  const onTextHandler = (e) =>{
    setTheText(e.target.value);
  }
  return <div>
    <label htmlFor="the-text">Text</label>
    <input type="text" id="the-text" className="text-class" value={theText} />
    <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
    
    
    <Person />
    <Person firstName="Thomas"/>
    <Person />
    <Person />
  </div>;
}

export default app;