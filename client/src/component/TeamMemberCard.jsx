import React from 'react'

function TeamMemberCard({imageSrc , name , role}) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={imageSrc}   alt="Team member" className="w-full  overflow-hidden"/>
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
                <p className="text-gray-600">{role}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard