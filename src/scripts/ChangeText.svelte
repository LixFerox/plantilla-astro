<!--PUEDES BORRAR ESTO, ES UN EJEMPLO DE USO DE SVELTE-->
<script>
    let text = "Bienvenido a tu página web";
  
    function changeText() {
      if (text=="Bienvenido a tu página web") {
        text = "Esto es una prueba";
      }else {
        text = "Bienvenido a tu página web";
      }
    }
  </script>
  
  <h1>{text}</h1>
  <button class="bg-green-500 p-2" on:click={changeText}>¿Qué es esto?</button>
  