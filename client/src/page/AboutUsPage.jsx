import React from 'react';

import TeamMemberCard from '../component/TeamMemberCard'

function AboutUsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 my-10" >
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">Learn more about our mission and the team behind our success.</p>
      </div>

      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to provide innovative and scalable solutions that empower users to achieve their goals. We are dedicated to creating user-centric designs and technologies that are accessible, reliable, and secure.
        </p>
      </div>

      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet the Team</h2>
        <div className="flex flex-wrap -mx-4">
          {/* Team Member Card */}
          
          <TeamMemberCard imageSrc={"https://media.licdn.com/dms/image/D5603AQEm-aMBqruYMw/profile-displayphoto-shrink_200_200/0/1676628651978?e=1714608000&v=beta&t=nzS7THUSaugTH0I9fcd1WyMlmF9vxDTS5cdXyT_Tj-g"} name={"Jasraj Chouhan"}  role={"Team Lead & Full-Stack SuperVisor"} />
         
          <TeamMemberCard imageSrc={"https://media.licdn.com/dms/image/D5603AQEKtN9vGjDR5A/profile-displayphoto-shrink_200_200/0/1695403811815?e=1714608000&v=beta&t=CSztnfOdBp7PWsVPjqJE-TVwyyMstM7KLOKYzrrzv7E"} name={"Hemang Choudhary"}  role={"Front-End Head & Back-End Assist"} />
          <TeamMemberCard imageSrc={"/Man3.jpeg"} name={"Girish Garg"}  role={"Front-End Member & Back-End Assist"} />

         
     
          <TeamMemberCard imageSrc={"https://media.licdn.com/dms/image/D4D03AQHy_VSnC2TxBA/profile-displayphoto-shrink_200_200/0/1703675083442?e=1714608000&v=beta&t=b-v_yJIm0C1nLspmmNnvT-U60T1FujSQGh_SG3yFoZI"} name={"Mayank Aggarwal"}  role={"Illustration Head & Lead Pitcher"} />
          <TeamMemberCard imageSrc={"/Man2.jpg"} name={"Harsh Pratap Singh"}  role={"Assistant Pitcher"} />
          <TeamMemberCard imageSrc={"/Man.jpg"} name={"Manvendra Singh"}  role={"Management Member"} />

          
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
