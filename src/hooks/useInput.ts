import { ChangeEvent,  useState } from "react";


export default function useInput(initialValue:string) {
 const [value,setValue]=useState<string>("")
 const reset = ()=>{
    setValue(initialValue)
 }

 const bind = {
    value,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
 }

 return [value,bind,reset]
}
 