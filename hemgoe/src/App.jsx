const Students=(props)=>{

const {firstName, lastName, bgColor}=props
return (
  <div  style={{ background:bgColor}}>
    <h2>FirstName:{firstName}</h2>
    <h2>LastName:{lastName}</h2>
  </div>
)
}

const StudentsList=()=>{
  return (
    <div className="text-blue-50 text-10xl border-2 p-8 m-4 border-red-500 rounded-md hover:bg-cyan-200">
      <Students firstName="Yvonne" lastName="IZERIMANA" bgColor="red"/>
      <Students firstName="Ange" lastName="UMUTONI" bgColor="yellow" />
    </div>
  )
}

export default StudentsList