// import Footer from "../components/Footer"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NewCollections from "../components/NewCollections"
import NewLetter from "../components/NewLetter"
import Offer from "../components/Offer"
import Popular from "../components/Popular"
import Category from "./Category"

const Home = () => {
  return <>
  <Hero />
  <Popular/>
  <Offer/>
  <NewCollections/>
  <NewLetter/>
  <Category category={Category}/>
  </>
}

export default Home