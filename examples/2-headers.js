import { useState } from 'react';
import axios from 'axios';

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const {data} = await axios(url, {
      headers:{
        Accept:'application/json'
      },
    });
    setJoke(data.joke)
    } catch (error) {
      console.log(error.response)
    }
  };

  const saveJoke = () => {
    console.log({joke});
  }

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        Random joke
      </button>
      <p className='dad-joke'>{joke}</p>
      <button className='btn' onClick={saveJoke}>
        Save joke
      </button>
    </section>
  );
};

export default Headers;
