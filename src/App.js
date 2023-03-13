import { useState , useEffect } from 'react';
import db from './firebase'
import './App.css';
import Modal from './Modal';
import firebase from 'firebase/compat/app';

function App() {
  const [buttonTrigger , setButtonTrigger] = useState(false);
  const [input , setInput] = useState("");
  const [item , setItems] = useState([{}]);
  const handleChange = (e)=>{
    setInput(e.target.value);
    console.log(input)
  }
  // loop the data on app fire 
  useEffect(()=>{
     db.collection("playListName").orderBy("timestamp" , "desc").onSnapshot(snap=>{
      setItems(snap.docs.map(doc=>({id:doc.id , name:doc.data().name   })));
    })
  } , []);

  // add data to the firebase 
  const handleSubmit = (e)=>{
    e.preventDefault();
    db.collection("playListName").add({
      name:input , 
      timestamp : firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput("")
  }

  


  return (
    <div className="App">
      <h1>
        <button
        onClick={()=>setButtonTrigger(true)}
        >ClickToShow</button>
      </h1>
      <div>
        <Modal trigger = {buttonTrigger} setTrigger ={setButtonTrigger} >
          <form onSubmit={handleSubmit}>
          <input value={input} 
           onChange={handleChange} type='text' placeholder='Enter Your Playlist' />
            <br/> <br/>
              <button>Add To Playlist</button>

          </form>
        </Modal>
      </div>
      {
        item.map((elemnt)=>{
          console.log(elemnt)
          return (
          <div className='list'>
            <p key={elemnt.id}>
              {elemnt.name} 
              <button onClick={e=> db.collection("playListName").doc(elemnt.id).delete()}>Delete me</button>
              </p>
            
          </div>
          
          )
        })
      }
    </div>
  );
}

export default App;
