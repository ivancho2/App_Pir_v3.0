function IPersona(){
  //metodos que involucran la interface de comunicacion
  var interf=['Registrar_Persona', 'Consultar_Persona', 'Modificar_Persona', 'Inhabilitar_Persona'];
  console.log(interf);
  return interf;
};
module.exports = IPersona;
