import AppProvider from '../components/appProvider/appProvider';
import ToolBar from '../components/toolBar/toolBar';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="p-5 min-h-screen ">
        <ToolBar />
      </div>
    </AppProvider>
  );
}

export default App;
