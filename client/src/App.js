import './App.css';
import Leinster from './componentes/leinster';
import getCervezas from  '../src/store/action/index.js'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  
  useEffect (() => {
    dispatch(getCervezas() );
    },[dispatch])
  return (
   <Leinster />
   
  );
}

export default App;
