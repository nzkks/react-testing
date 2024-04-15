// import { Application } from './components/application/application';
import './App.css';
import { Skills } from './components/skills/skills';

const skills = ['HTML', 'CSS', 'JavaScript'];

function App() {
  return (
    <div className="App">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
