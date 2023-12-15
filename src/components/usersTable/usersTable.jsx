import { useContext } from "react"
import useGetUsers from "./useGetUsers"
import { Context } from "../../hooks/useAppState"
import Table from "./ui/table"

const UsersTable = ({ }) => {
  const { seed, region } = useContext(Context)
  const { userList } = useGetUsers(seed, region)

  return (
    <>
      <Table rows={userList} />
    </>
  )
}

export default UsersTable