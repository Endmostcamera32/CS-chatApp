import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useSignalR from './signal'
import './App.css'

function App() {
  const {connection} = useSignalR("/r/chat");

  return (
    <div className="App">
      <h1>SignalR Chat</h1>
      <p>{connection ? "Connected" : "Not connected"}</p>
    </div>
  );
}

export default App
