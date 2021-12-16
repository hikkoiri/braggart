import './App.css';
import GithubOverview from './components/GithubOverview';

function App() {

  var username = "hikkoiri"


  return (
    <>


      <GithubOverview
        username={username}
      />
    </>
  );
}

export default App;
