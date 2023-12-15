import { useState, useEffect } from "react"
import getUser from "../../utils/generateFakeData"
import { START_USER_QUANTITY, PAGE_STEP } from "../../utils/consts"

const useGetUsers = (seed, country) => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    setUserList([])
    getUserList(0, START_USER_QUANTITY)

  }, [seed, country])

  useEffect(() => {
    window.addEventListener('scroll', getNextUsers)
    return () => {
      window.removeEventListener('scroll', getNextUsers)
    }
  }, [userList])

  const getNextUsers = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const offsetHeight = window.scrollY;
    const isBottom = offsetHeight + clientHeight >= scrollHeight
    if (isBottom) {
      getUserList(userList.length, PAGE_STEP)
    }
  }

  const getUserList = (start = 0, end) => {
    const newUsers = []
    for (let i = start; i < start + end; i++) {
      const currentSeed = seed + i
      const newUser = getUser(currentSeed, country)
      newUsers.push(newUser)
    }
    setUserList(users => [...users, ...newUsers])
  }

  return { userList, getUserList, setUserList }
}

export default useGetUsers