import { ReactNode } from "react"

interface IButton{
    children:ReactNode
}

export function Button({children}:IButton) {
  return (
    <button>{children}</button>
  )
}

