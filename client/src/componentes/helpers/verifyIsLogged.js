// Esta funcion verifica si hay una sesión iniciada y retorna un
// objeto con true o false y como segundo elemento el id del usuario (si es que hay una sesión iniciada)
// NO FUNCIONA Y NO SE POR QUÉ O TAL VEZ SI PERO SOY MUY PERESOZO PARA AVERIGUAR POR QUÉ


export default function verifyIsLogged() {
   const id = sessionStorage.getItem("id");
   return id ?
      { isLogged: true, idUser: id } :
      { isLogged: false }
}