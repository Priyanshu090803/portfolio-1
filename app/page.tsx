import Experience from "@/components/Experience"
import Hero from "../components/Hero"
import { Projects } from "@/components/Projects"
const Home = () => {


  return (
    <div className="min-h-screen w-full px-64 py-15 font-stack relative">
      <Hero />
      <Experience />
      <Projects/>
    </div>
  )
}

export default Home