import { useState, useEffect } from "react"
import { getUser } from "../../utils/generateFakeData"
import { START_USER_QUANTITY, PAGE_STEP } from "../../utils/consts"
import generateMistake from "../../utils/generateMistakesInUser"

const useGetUsers = (seed, country, mistakes = 0) => {
  const [userList, setUserList] = useState([])

  useEffect(() => {
    setUserList([])
    getUserList(0, START_USER_QUANTITY)

  }, [seed, country, mistakes])

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
      const newUserWithMistakes = generateMistake(newUser, mistakes, currentSeed, country)
      newUsers.push(newUserWithMistakes)
    }
    setUserList(users => [...users, ...newUsers])
  }

  return { userList, getUserList, setUserList }
}

export default useGetUsers