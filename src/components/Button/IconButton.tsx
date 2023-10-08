import  { ReactNode } from 'react'

interface IButton{
    children:ReactNode
}

export function IconButton({children}:IButton) {
  return (
    <button>{children}</button>
  )
}
