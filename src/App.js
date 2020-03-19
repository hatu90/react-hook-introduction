import React from 'react';
import FunctionCounter from './components/use-state-samples/FunctionCounter';
import './App.css';
import FunctionPosts from './components/use-effect-samples/FunctionPosts';
import ClassPosts from './components/use-effect-samples/ClassPosts';
import FunctionTimer from './components/cleanup-samples/FunctionTimer';
import HOCTimer from './components/cleanup-samples/HOCTimer';


function App() {
  return (
    <div className="App">
      {/* <FunctionCounter /> */}
      {/* <FunctionPosts /> */}
      {/* <ClassPosts /> */}
      {/* <FunctionTimer /> */}
      <HOCTimer />
    </div>
  );
}

export default App;
