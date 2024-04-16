// import { Application } from './components/application/application';
import './App.css';
// import { Skills } from './components/skills/skills';
// import { Counter } from './components/counter/counter';
// import { MuiMode } from './components/mui/mui-mode';
import { Users } from './components/users/users';
import { AppProviders } from './providers/AppProviders';

// const skills = ['HTML', 'CSS', 'JavaScript'];

function App() {
  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skills skills={skills} /> */}
        {/* <Counter /> */}
        {/* <MuiMode /> */}
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
