import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase.js';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages,setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
      db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc, message: doc.data()})))
    })
  },[])

  useEffect(() => {
    setUsername(prompt('enter your name'))
  }, [] )

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Messenger</h1>
      <p>Hello {username}</p>

      <form class="app__form">
      <FormControl classNAme="app__formControl">
        <InputLabel >Enter the message</InputLabel>
        <Input  className="app__input" value={input} onChange={event => setInput(event.target.value)} />
        
        <IconButton className="app__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick ={sendMessage} >
          <SendIcon />
        </IconButton>
        
      </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>
      

    </div>
  );
}

export default App;
