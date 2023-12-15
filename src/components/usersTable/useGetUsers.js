import { useState, useEffect } from "react"
import getUser from "../../utils/generateFakeData"
import { START_USER_QUANTITY, PAGE_STEP } from "../../utils/consts"


const useGetUsers = (seed, country) => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    setUserList([])
    getUserList(0, START_USER_QUANTITY)

  }, [seed, country])

  const getUserList = (start, end) => {
    const newUsers = []
    for (let i = start; i < end; i++) {
      const currentSeed = seed + i
      const newUser = getUser(currentSeed, country)
      newUsers.push(newUser)
    }
    setUserList(newUsers)
  }

  return { userList, getUserList }
}

export default useGetUsers