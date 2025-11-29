import Experience from "@/components/Experience"
import Hero from "../components/Hero"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
const Home = () => {


  return (
    <div className="min-h-screen w-full px-64 py-15 font-stack relative">
      <Hero />
      <Experience />
      <Projects/>
      <About/>  
    </div>
  )
}

export default Home