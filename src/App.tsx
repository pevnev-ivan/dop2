import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";

type getType = {
    "postId": number
    "id": number
    "name": string
    "email": string
    "body": string
}

function App() {
    const[get, setGet] = useState<Array<getType>>([])

    const GetRequestHandler = () => {
        setGet([])
    }
const test = 0
    useEffect(() =>
    {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setGet(json));
    }, [])

  return (
    <div className="App">
     <Button nickName={'Get Request'} callBack={GetRequestHandler}/>
        <p></p>
        <ul>
        {get.map((el)=> {
            return(

                   <li>
                       <span>{el.id}</span>
                       <span>{el.body}</span>
                       <span>{el.postId}</span>
                   </li>

            )
        })}
        </ul>
    </div>
  );
}

export default App;
