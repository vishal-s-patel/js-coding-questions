import { useState, useRef, useEffect } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default function App() {
  const [count, setCount] = useState(0);
  const prev = usePrevious(count);
  return (
    <div className="App">
      <h1>
        Now: {count}, before:{prev}
      </h1>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}
