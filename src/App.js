import KeelvarTechTest from './components/Keelvar';

function App() {

  const x = [4, 5, 15, 2, 8 ];
  const y = [8, 7, 5, 3];
  
  return (
    <div>
       <h3> Array of values [4, 5, 15, 2, 8 ]
        <KeelvarTechTest arg={ [4, 5, 15, 2, 8 ]} />
        </h3>
    </div>
  );
}

export default App;
