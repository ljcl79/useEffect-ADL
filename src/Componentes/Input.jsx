import React, { useState, useEffect } from 'react'

const Input = () => {
    const [valor,setValor] = useState('');
    const [contador, setContador] = useState(0);
    const [persona, setPersona] = useState({});
    const [personas, setPersonas] = useState([]);
    const [cargado, setCargado] = useState(false);

    //Vamos a definir el efecto secundario
    useEffect(() => {
        //effect
        
        getListaUsuarios();
    },[]);

    

    async function getRandomUser(){
        const res = await fetch("https://randomuser.me/api")
        const data = await res.json()
        console.log(data);
        setCargado(true);
        setPersona(data.results[0]);
    }

    async function getListaUsuarios() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setPersonas(data);
        setCargado(true);
    }
       
    
  return (
    cargado ?
    <div>
      <ul>
        {
            personas.map((p) => {
                return <li>{p.name}</li>
            })
        }
      </ul>
    </div>:
    <h1>Cargando datos</h1>
  )
}

export default Input
