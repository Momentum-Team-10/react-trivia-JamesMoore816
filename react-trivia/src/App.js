import { useEffect, useState } from 'react'
import axios from 'axios'
import Categories from './components/Categories.js'
import CategoryView from './components/CategoryView.js';
import './App.css';

export function App() {
  return (
    <>
    <h1>Welcome to React Trivia!</h1>
    <div className="App">
      <CategoryView></CategoryView>
    </div>
    </>
  );
}

export default App;
