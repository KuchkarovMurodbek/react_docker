import  { ReactNode } from 'react'

interface IButton{
    children:ReactNode,
    icon:ReactNode
}

export function IconButton({children,icon}:IButton) {
  return (
      <button><span>{icon}</span>{children}</button>
  )
}
