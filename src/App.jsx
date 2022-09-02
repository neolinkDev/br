import { useState } from 'react';

import data from './data';
import List from './List';

function App() {

  // hook useState con la data de lo que se muestra en el DOM
  const [ people, setPeople ] = useState( data );
  
  return (
    <main>
      <section className="container">
        <h3>{ people.length } cumpleaños hoy</h3>
        <List people={ people } />
        <button onClick={ () => setPeople( [] ) }
        >
          Limpiar
        </button>
      </section>
    </main>
  )
}

export default App;
