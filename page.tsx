

import Image from "next/image";
import profile from"../../pubic/profile.jpg";


export default function Home() {
  return (
    <>
   <div className="bg-violet-500 flex justify-center items-center h-[800px]">
      <div className="w-[1200px] h-[200px] m-[40px] text-red-300 font-bold text-[40px] pl-[20px] nl-[20px]">
      <b><i><u>Assalam o Alikum,</u></i></b>
      <br />
      This is me <span>Manahil Nadeem.</span>
      <br />
      <h2>I want to become <span>"Frontened Developer".</span></h2>
      <br />
      <p className="text-[40px]">I have completed HTML ,CSS and Javascript,Typescript. Now I am learning artificial intelligence,metaverse and web3.0 in <span>Governor house,Karachi.</span></p>
      
      
      </div>

      <div className="h-[400px] w-[400px]  justify-center mt-20 item-right">
      <Image src={profile} alt="profile pic"></Image>
      </div>
      </div>
  
  
  
    </>
    
  )
}
