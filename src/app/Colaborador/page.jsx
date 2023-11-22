import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AgendaColaboradorForm from "@/components/Agenda/AgendaColaborador";
import Prontuario from "@/components/Prontuario/prontuario"
import Receita from "@/components/Receita/Receita";

export default function Colaborador() {
  return (
    <>
      <Navbar/>
      <AgendaColaboradorForm/>
      <Prontuario/>
      <Receita/>
      <Footer/>

    </>
  )
}