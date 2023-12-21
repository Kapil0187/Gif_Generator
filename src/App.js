import React from 'react';
import './App.css';
import Random from './components/Random';
import Tag  from './components/Tag';

function App() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500 relative items-center">
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-4xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center'>
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}

export default App;
