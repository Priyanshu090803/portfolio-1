import Image from "next/image"

const Home = () => {  
  return (
    <div className=' min-h-screen w-full px-72 py-16 font-stack relative'>
       <Image 
              src="/star.svg"
              alt="svg-pic"
              width={20}
              height={20}
              color="yellow"
              className="  absolute -rotate-25 top-1/2"
            /><Image 
            src="/star.svg"
            alt="svg-pic"
            width={20}
            height={20}
            color="yellow"
            className="  absolute rotate-25 top-2/3 right-68 "
          />
        <div className="  space-y-6  ">
          <div className=" border-black rounded-lg flex gap-2 items-end">
         
            <Image 
              src="/pfp.PNG"
              alt="profile-pic"
              width={400}
              height={600}
              className=" border h-40 w-40 object-cover object-top rounded-2xl"
            />
              <span className=" font-bold text-neutral-400 dark:text-neutral-200">(__Pookie mode)</span>
          </div>
          <h1 className=" text-6xl font-black text-neutral-700 dark:text-neutral-50">HIE, my name is <span className="text-[#c562fa]">PRIYANshu</span></h1>
        </div>

    </div>
  )
}

export default Home