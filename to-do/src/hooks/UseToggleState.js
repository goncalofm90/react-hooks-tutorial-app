import { useState } from 'react';

let useToggle =  function useToggle(initialVal = false) {
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

export default useToggle;