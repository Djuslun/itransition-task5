import ToolBar from '../components/toolBar/toolBar';
import UsersTable from '../components/usersTable/usersTable';
import { useContext } from "react"
import useGetUsers from "./useGetUsers"
import { Context } from "../hooks/useAppState"
import './App.css';

function App() {
  const { seed, region, errorQantity } = useContext(Context)
  const { userList } = useGetUsers(seed, region, errorQantity)
  return (
    <div className="p-5 min-h-screen ">
      <h1 className='text-3xl mb-4'>Fake user generator</h1>
      <ToolBar users={userList} />
      <UsersTable users={userList} />
    </div>

  );
}

export default App;