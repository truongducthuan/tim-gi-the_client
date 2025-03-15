import { useState } from "react"

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errMessage, setErrMessage] = useState<string>("")

  const login = () => {
    
  }

  return {
    login,
    isLoading,
    errMessage
  }
}