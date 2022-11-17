import Basico from "./Basico";
function ConsumoBasico() {
  return (
    <>
      <Basico name="Diego" universidad="EPN" carrera="Sistemas"></Basico>;
      
    </>
  );
}
function NombrePersona(props){
    return <strong>{props.name}</strong>
}


export default ConsumoBasico;
