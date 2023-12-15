import AppProvider from '../components/appProvider/appProvider';
import ToolBar from '../components/toolBar/toolBar';
import UsersTable from '../components/usersTable/usersTable';
import './App.css';

function App() {
  return (
    <AppProvider>
      <div className="p-5 min-h-screen ">
        <ToolBar />
        <UsersTable />
      </div>
    </AppProvider>
  );
}

export default App;
