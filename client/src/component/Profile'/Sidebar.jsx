import { NavLink } from "react-router-dom";



const Sidebar = () =>{

 
   return(
    
    <>
    <aside className="  relative top-0 flex h-screen w-52 flex-col  border-r bg-transparent px-10 py-10 z-0">

  <div className="mt-6 flex flex-1 flex-col justify-between">
    <nav className=" space-y-6 ">
      <div className="space-y-3 ">
       
        <NavLink
          className="flex transform items-center rounded-lg px-2  py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          to={`/profile`}
        >
          <i className="fa-solid fa-user"></i>
          <span className="mx-2 text-sm font-medium">Profile</span>
        </NavLink>
        <NavLink
          className ="flex transform items-center rounded-lg px-2 py-2  text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          to={`/profile/questions`}
        >
        <i className="fa-solid fa-question"></i>
          <span className="mx-2 text-sm font-medium">Questions</span>
        </NavLink>
        <NavLink
          className ="flex transform items-center rounded-lg px-2 py-2  text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          to= {`/profile/answer`}
        >
            <i className="fa-solid fa-check"></i>
          <span className="mx-2 text-sm  text-center font-medium">Answers</span>
        </NavLink>
        <NavLink
          className ="flex transform items-center rounded-lg px-2 py-2  text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
          to= {`/profile/addafile`}
        >
            <i className="fa-solid fa-file-circle-plus"></i>
          <span className="mx-2 text-sm  text-center font-medium">Add Notes</span>
        </NavLink>
      </div>


    </nav>
  </div>
</aside>

    </>
   )
}

export default Sidebar;