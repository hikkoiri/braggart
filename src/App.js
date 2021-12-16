import './App.css';
import GithubOverview from './components/GithubOverview';
import { ThemeProvider } from '@primer/react'

function App() {

  var username = "hikkoiri"

  return (
    <>
      <ThemeProvider>
        <GithubOverview
          username={username}
        />
      </ThemeProvider>

    </>
  );
}

export default App;
