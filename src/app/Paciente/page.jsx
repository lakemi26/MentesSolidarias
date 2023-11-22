import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import AgendaPacienteForm from "@/components/Agenda/AgendaPaciente";
import Avaliacao from "@/components/Avaliacao/Avaliacao";


export default function Paciente() {
  return (
    <>
      <Navbar/>
      <AgendaPacienteForm/>
      <Avaliacao/>
      <Footer/>

    </>
  )
}