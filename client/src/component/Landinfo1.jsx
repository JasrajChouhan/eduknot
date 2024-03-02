const Landinfo1 = () => {
    return(
        <>
            <div className=" mt-[100px] mx-10 max-w-7xl px-2 lg:px-8 mb-[100px]">
                <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
                    <div>
                        <div className="mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                          <i className = "text-violet-600 scale-[2] fa-solid fa-lock"></i>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black text-left">Authenticated Login</h3>
                        <p className="mt-4 text-sm text-gray-600 text-left">
                         We don't want just anybody to access the platform. To justify the platform access we Authenticate both Students and University
                        </p>
                    </div>
                    <div>
                        <div className="mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
                         <i className= "fa-solid fa-question scale-[2] "></i>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black text-left">
                           A Integrated Doubt System
                        </h3>
                        <p className="mt-4 text-sm text-gray-600 text-left" >
                           We are a unified doubt clearing platform we bring all the University Students together customizing the experience
                        </p>
                    </div>
                    <div>
                        <div className="mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                           <i className= "fa-solid text-green-700 fa-building-columns scale-[2] "></i>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black text-left">
                         Campus  Updates
                        </h3>
                        <p className="mt-4 text-sm text-gray-600 text-left" >
                            As we are affiliated with the university we also provide students with the latest campus updates from fests to every thing.
                        </p>
                    </div>
                    <div>
                        <div className="mx-0 flex h-20 w-20 items-center justify-center rounded-full bg-red-100 ">
                        <i className= "fa-solid text-red-700 fa-filter scale-[2] "></i>
                        </div>
                        <h3 className="mt-8 text-lg font-semibold text-black text-left">Search to Filter</h3>
                        <p className="mt-4 text-sm text-gray-600 text-left" >
                            We used a simple search to filter algorithm to make your task easier when searching for a certain post by a student of certain University.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Landinfo1;