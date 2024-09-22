// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Letras de la canción con traducciones y tiempos de aparición
var lyricsData = [
  { text: "I don't know you<br>No te conozco", time: 4 },
  { text: "But you make me wonder who you are<br>Pero me haces preguntarme quién eres", time: 6 },
  { text: "헐렁한 청바지<br>Loose jeans<br>Esos vaqueros sueltos", time: 8 },
  { text: "풀려있는 머리<br>Loose hair<br>Ese cabello despeinado", time: 10 },
  { text: "I want to know you<br>Quiero conocerte", time: 14 },

  { text: "I don't know you<br>No te conozco", time: 20 },
  { text: "넌 말없이 눈웃음치며<br>You smile silently with your eyes<br>Sonríes en silencio con los ojos", time: 23 },
  { text: "가끔 건넨 말에<br>Sometimes, in the words you've said<br>A veces, en las pocas palabras que dices", time: 27 },
  { text: "의미 부여를 해<br>I give meaning to them<br>Les doy un significado", time: 33 },
  { text: "Just want to know you<br>Solo quiero conocerte", time: 36 },

  { text: "Do you want me<br>¿Me quieres?", time: 45 },
  { text: "Like I just wanna know you, girl<br>Como yo solo quiero conocerte, chica", time: 50 },
  { text: "네 알 수 없는 미소가<br>Your unreadable smile<br>Tu sonrisa misteriosa", time: 55 },
  { text: "날 궁금하게 만들어<br>Makes me curious<br>Me despierta curiosidad", time: 60 },
  { text: "I don't know you<br>No te conozco", time: 67 },

  { text: "너만 가리키는 나침반<br>A compass pointing only to you<br>Una brújula que solo te señala a ti", time: 71 },
  { text: "몸에 찍혀있는<br>Stamped on your body<br>Marcado en tu cuerpo", time: 76 },
  { text: "자그만 마침표<br>A small period<br>Como un pequeño punto final", time: 80 },
  { text: "Let me travel you<br>Déjame recorrer cada parte de ti", time: 85 },
  { text: "Do you want me<br>¿Me quieres?", time: 89 },

  { text: "Your lover who will never change<br>Tu amante que nunca cambiará", time: 94 },
  { text: "너의 어설픔까지도<br>Even your awkwardness<br>Incluso tu torpeza", time: 99 },
  { text: "날 집착하게 만들어 no<br>Makes me obsessed, no<br>Me tiene obsesionado, no", time: 104 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // Use current time directly for precision
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 1
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 1; // Hacer el efecto de aparición más gradual (1 segundo)
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Actualizar más frecuentemente para mejor sincronización
setInterval(updateLyrics, 100);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
