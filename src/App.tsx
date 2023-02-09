import React from 'react';
import FunctionComponentExample from './components/FunctionComponentExample';
import ClassComponentExample from './components/ClassComponentExample';

function App() {
  return (
    <>
      <FunctionComponentExample />
      <ClassComponentExample propText="Test 12345"/>
    </>
  );
}

export default App;
