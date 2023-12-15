import { useContext, useEffect } from "react"
import useGetUsers from "./useGetUsers"
import { Context } from "../../hooks/useAppState"

const UsersTable = ({ }) => {
  const { seed, region } = useContext(Context)
  const { userList } = useGetUsers(seed, region)

  useEffect(() => {
    console.log(userList)
  }, [userList])

  return (
    <>

    </>
  )
}

export default UsersTable