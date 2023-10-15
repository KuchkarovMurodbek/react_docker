import { useEffect } from "react";

export  function useUpdateLogger(value:string|boolean|number){
useEffect(()=>{
  console.log(value)
},[value])
}