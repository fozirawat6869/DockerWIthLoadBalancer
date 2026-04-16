import { useEffect } from "react"
import axios from "axios"

function App() {
 
 useEffect(()=>{
   axios.get("http://localhost:8090/api/details")
    .then((res)=>{
      console.log("res is : ",res)
    })
    .catch((err)=>{
      console.log("error in query",err)
    })
 },[])

  return (
    
    <>
      <div>hlo react</div>
    </>
  )
}

export default App
