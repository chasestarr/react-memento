## react-memento

Step-through and rewind react state transitions.

 <img src="https://i.imgur.com/z3Q6adX.png" width="600">

```jsx
import React from 'react';
import useMemento from 'react-memento';

function App() {
  const [count, setCount, memento] = useMemento(0, 'count');

  return (
    <button onClick={() => setCount(count + 1)}>{increment}</button>
    <p>{count}</p>

    {memento}
  );
}
```

`useMemento` maintains a similar api to react's [state hook](https://reactjs.org/docs/hooks-state.html). In addition to the current value, and a setter, it provides a memento component to display the debugger UI. The function also accepts an optional label to identify multiple mementos rendered to the page.

---

unrelated - but i was listening to [this architecture presentation](https://youtu.be/RBlOHFM-ShI?t=1597) by [Neri&Hu](http://www.neriandhu.com) while writing. i was struck by how beautiful the vernacular buildings are in Jiangnan China.

![jiangnan architecture](https://i.imgur.com/rVmyQ5T.jpg)
