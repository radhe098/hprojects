import React, { useState } from "react";

// Create a custom hook to mimic Svelte's writable store
function useWritable(initialValue) {
  const [state, setState] = useState(initialValue);

  const setWritable = (newValue) => {
    setState(newValue);
  };

  return [state, setWritable];
}
ww
const [user, setUser] = useWritable({});

