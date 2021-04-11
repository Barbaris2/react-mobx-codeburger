import ConterFunction from './component/CounterClass';

function App() {
  return (
    <div className='App'>
      <h1>Class component:</h1>
      <ConterFunction initialCount={10} />
      <h1>Func component:</h1>
      <ConterFunction initialCount={10} />
    </div>
  );
}

export default App;
