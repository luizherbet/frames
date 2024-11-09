const canvas = document.getElementById('spriteCanvas');
const ctx = canvas.getContext('2d');

const sprite = new Image();
sprite.src = 'luizherbet.png'; // Substitua pelo caminho da sua imagem

const frameWidth = 490; // Largura de cada frame
const frameHeight = 500; // Altura do frame
const totalFrames = 5; // Total de frames (cenas)
let currentFrame = 0; // Frame atual

sprite.onload = () => {
  // Inicia a animação quando a imagem carrega
  setInterval(animateSprite, 600); // A cada 200ms, muda de frame
};

function animateSprite() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
  const offsetX = currentFrame * frameWidth; // Calcula o deslocamento horizontal

  // Desenha o frame atual no canvas
  ctx.drawImage(
    sprite,
    offsetX,
    0,
    frameWidth,
    frameHeight, // Posição e tamanho do frame na imagem
    0,
    0,
    frameWidth,
    frameHeight // Posição e tamanho no canvas
  );

  currentFrame = (currentFrame + 1) % totalFrames; // Move para o próximo frame
}
