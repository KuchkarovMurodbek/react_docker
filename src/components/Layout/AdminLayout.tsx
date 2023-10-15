import { Input } from "../Input/Input"
// import { Sidebar } from "../Sidebar"

function AdminLayout() {
  return (
    <div className="flex">
      {/* <Sidebar/> */}
    
    <Input type="text" label="Firstname" placeholder="Firstname" value="" onChange={()=>""} error=""/>
    <Input type="password" label="Password" placeholder="Password" value="" onChange={()=>""} error=""/>
    </div>
  )
}

export default AdminLayout