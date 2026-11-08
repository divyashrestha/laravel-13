import {useEffect, useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {api} from "./lib/api.ts";

function App() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState('Checking API...')
  useEffect(()=>{
    api.get('/health')
        .then((response)=>{
          setStatus(response.data.message)
        })
        .catch(()=>{
          setStatus('Unable to connect to API')
        })
  },[])

  return (
      <main className='min-h-screen flex items-center justify-center'>
        <div className={'text-center'}>
          <h1 className={'text-3xl font-bold'}>
            My Application
          </h1>
          <p className={'mt-4'}>
            Backend status: {status}
          </p>
        </div>
      </main>
  )
}

export default App
