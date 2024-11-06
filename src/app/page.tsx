import Image from "next/image";
import Header from "./component/Header/Header"

function homepage (){
  return(
        <div className="h-screen">
          <Header></Header>

          <div className="flex h-[80%]">

          <div className="w-1/2 flex flex-col justify-center items-start m-12">

            <h1 className="font-serif leading-[65.8px] font-[700] text-[37px] w-[496px] h-[189px]
            top-[316px] left-[176px] size-[40px] font-normal tracking-[2.5%] text-black ">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
           </h1>

           <p className="w-[902px] h-[147px] top-[533px] left-[171px] text-[32px]  font-serif 
           text-stone-500 pr-[120px] ">

           An example of intricate workmanship and detail,
           elegant necklaces and long and short chains form
           a part of our desirable collection.
           
           </p>
           
           <button className="font-serif rounded-[3px]  mt-[25px] font-[23px] bg-yellow-600
            text-white w-288px h-49px py-2 px-8 ">
             Explore Now
           </button>
           
           </div>
           
           <div className="w-1/2 flex justify-center items-center">
           <Image className="h-[647px] w-[462px] mt-[230px] ml-[70px] pb-[120px] mr-10"
            src={"/image/figma image.png"}
            alt="hero image"
            width={462}
            height={647}/>

              
           </div>
          </div>
        </div>

  )
}

export default homepage;
