import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';
import Header from './components/Header.jsx'

const Main = () => (
  <main>
    <CoreConcepts />
    <Examples />
  </main>
  
)
const App = () => (
    <>
      <Header />
      <Main />
    </>
  );

export default App;
