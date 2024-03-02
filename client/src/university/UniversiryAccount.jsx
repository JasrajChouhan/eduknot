import {UserButton} from "@clerk/clerk-react";


function UniversityAccount(props) {
  
  

    return (
      <>
      
      <div className="absolute ml-52 w-auto top-24 z-[0]">
     <div class=" relative w-[83.5vw] rounded-md  border-l-4 border-yellow-500 bg-yellow-100  p-4">
    <div class="flex items-center  space-x-4">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6 text-yellow-600"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div>
        <p class="text-sm font-medium text-left text-yellow-600">
          All the information shown here is given by you and your University. We take data privacy as a major concern.
  
        </p>
      </div>
      <div>
        
      </div>
    </div>
  </div>
  
  <div class="relative mt-10  mb-10 flex max-w-2xl flex-col items-center rounded-md border border-black    md:flex-row" style = {{transform : "translate(30%,0%)"}}> 
    <div class="h-full w-full px-4  md:h-[200px] md:w-[300px]">
      <img
        src="https://images.unsplash.com/photo-1708898816130-0f5020a0f639?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Laptop"
        class="h-full w-full rounded-2xl object-cover"
      />
    </div>
    <div>
      <div class="p-4">
        <h1 class="inline-flex items-center text-lg font-semibold">
          About you{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="ml-2 h-4 w-4"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </h1>
        <div className=" h-[1px]  w-full opacity-60 bg-black"></div>
        <p class="mt-3 text-sm text-gray-600">
          Your University ID is : <span className="font-bold">{props.id} </span>
          
          <br/>
          <br/>
          Your University Name is : <span className="font-bold">{props.env}</span> 
          <br/>
          <br/>
          Your University mail is : <span className="font-bold">{props.mail}</span> 
          
        </p>
        <div class="mt-4">
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Eduknot
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {`#${props.uni}`}
          </span>
          <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Faculty
          </span>
        </div>
        <div class="mt-3 flex items-center space-x-2">
         
             <div className="w-8">
          <img src = "./user.png" ></img>
        </div>
          <span class="flex flex-col">
            <span class="text-[10px] font-medium text-gray-900">{`${props.full_name}`}</span>
            
            <span class="text-[8px] font-medium text-gray-500">{`@Faculty`}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
  
  </div>
  
      </>
    
    )
  }
  
  export default UniversityAccount;