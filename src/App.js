import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform.js'
import About from './components/About.js'
import React,{useState} from 'react'


function App() {
  const [mode,setmode]=useState('light')
  const [about,setabout]=useState(false)
  const [home,sethome]=useState(true)
  const toggleabout=()=>{
    
      setabout(true)
      sethome(false)
    
    

  }
  const togglehome=()=>{
    
      sethome(true)
      setabout(false)
    
    

  }
  const toggleswitch=()=>{
    console.log('clicked')
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='rgb(24 41 72)'

    }
    else{
      setmode('light')
       document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" mode={mode} togglehome={togglehome} toggleabout={toggleabout} toggle={toggleswitch}/>
<div className="container">
  {about===true?<About />:""}
  {(home===true )?<Textform heading="Enter the text to Analyze below" mode={mode}/> :""}
  {/* <Textform heading="Enter the text to Analyze below" mode={mode}/>  */}
  
  {/* <Textform heading="Enter the text to Analyze below"/> */}
  {/* <About/> */}

</div>
</>

  );
}

export default App;