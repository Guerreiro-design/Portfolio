const canvas = document.getElementById('tech-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const mouse = { x: null, y: null, radius: 160 };

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  init();
});

const symbols = ['{ }', '< >', '=>', '01', '&&', '||', ';', '!=', '=='];
let nodes = [];

class Node {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.char = symbols[Math.floor(Math.random() * symbols.length)];
    this.size = 12;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw() {
   
    ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
    ctx.font = `${this.size}px monospace`;
    ctx.fillText(this.char, this.x, this.y);
  }
}

function init() {
  nodes = [];
  const density = Math.floor((width * height) / 18000);
  for (let i = 0; i < density; i++) {
    nodes.push(new Node());
  }
}

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < nodes.length; i++) {
    nodes[i].update();
    nodes[i].draw();

   
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.hypot(dx, dy);

      if (dist < 110) {
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.18 - dist / 700})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }

  
    if (mouse.x !== null) {
      const dxMouse = nodes[i].x - mouse.x;
      const dyMouse = nodes[i].y - mouse.y;
      const distMouse = Math.hypot(dxMouse, dyMouse);

      if (distMouse < mouse.radius) {
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 - distMouse / (mouse.radius * 2)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
}

init();
animate();

let checkbox = document.getElementById("check")

let img = document.getElementById("DownloadCVWhite")

let SolLua = document.getElementById("SolLua")

checkbox.addEventListener("click", ()=>{
  document.body.classList.toggle("lightmode")
  if (img.getAttribute("src") === "IMGs/DownloadCV.png") {
    img.setAttribute("src", "IMGs/DownloadCVBlack.png");
  } else {
    img.setAttribute("src", "IMGs/DownloadCV.png");
  }
  if (SolLua.getAttribute("src") === "IMGs/sol.png") {
    SolLua.setAttribute("src", "IMGs/lua.png");
  } else {
    SolLua.setAttribute("src", "IMGs/sol.png");
  }
})

function mascaraTel() {
    let tel = document.getElementById("Tel").value;
    document.getElementById("Tel").value = tel.slice(0, 21);

    if (tel[0] != "+") {
        if (tel[0] != undefined) {
            document.getElementById("Tel").value = "+" + tel[0];
        }
    }
    if (tel[3] != " ") {
        if (tel[3] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 3) + " " + tel[3];
        }
    }
    if (tel[4] != "(") {
        if (tel[4] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 4) + "(" + tel[4];
        }
    }
    if (tel[7] != ")") {
        if (tel[7] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 7) + ")" + tel[7];
        }
    }
    if (tel[8] != " ") {
        if (tel[8] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 8) + " " + tel[8];
        }
    }
    if (tel[10] != " ") {
        if (tel[10] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 10) + " " + tel[10];
        }
    }
    if (tel[15] != "-") {
        if (tel[15] != undefined) {
            document.getElementById("Tel").value = tel.slice(0, 15) + "-" + tel[15];
        }
    }
}

function Resposta() {
    alert("Parabéns, sua mensagem foi enviada!");
}