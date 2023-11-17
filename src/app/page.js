import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import CardComponentImg from "@/components/CardComponentImg/CardComponentImg";
import CardComponent from "@/components/CardComponent/CardComponent";
import CollaboratorsComponent from "@/components/CollaboratorsComponent/CollaboratorsComponent";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner
        imageSrc='/img/Teste.jpg'
        altText='Banner inicial'
      />
      <CardComponent/>
      <CollaboratorsComponent/>
      <CardComponentImg/> 
      <Footer/>

    </>
  )
}
