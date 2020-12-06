import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    if (people.length > 0) {
      setPeople([]);
    } else {
      setPeople(data);
    }
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople} />
        <button onClick={clearList}>
          {people.length > 0 ? 'Clear All' : 'Get All'}
        </button>
      </section>
    </main>
  );
}

export default App;
