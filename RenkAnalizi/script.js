const form = document.getElementById("analizForm");
const sonucDiv = document.getElementById("sonuc");
const paletDiv = document.getElementById("renkPaleti");
const uygunsuzDiv = document.getElementById("uygunsuzPalet");
const tekrarBtn = document.getElementById("tekrarBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const cilt = document.getElementById("cilt").value;
  const sac = document.getElementById("sac").value;
  const goz = document.getElementById("goz").value;

  let renkPaleti = [];
  let uygunsuzPalet = [];

  if (cilt === "acik" && sac === "sari") {
    renkPaleti = ["#fddde6", "#b3e5fc", "#fff9c4"];
    uygunsuzPalet = ["#4a148c", "#880e4f", "#1a237e"];
  } else if (cilt === "bugday" && sac === "kahverengi") {
    renkPaleti = ["#ffccbc", "#c5e1a5", "#ffe082"];
    uygunsuzPalet = ["#263238", "#212121", "#424242"];
  } else if (cilt === "esmer" && sac === "siyah") {
    renkPaleti = ["#8e24aa", "#ffb74d", "#4dd0e1"];
    uygunsuzPalet = ["#fff8e1", "#fce4ec", "#f3e5f5"];
  } else if (goz === "yesil") {
    renkPaleti = ["#a5d6a7", "#f48fb1", "#fff59d"];
    uygunsuzPalet = ["#263238", "#3e2723", "#212121"];
  } else {
    renkPaleti = ["#ce93d8", "#81d4fa", "#ffcc80"];
    uygunsuzPalet = ["#1b5e20", "#0d47a1", "#4a148c"];
  }

  paletDiv.innerHTML = "";
  renkPaleti.forEach(renk => {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = renk;
    paletDiv.appendChild(div);
  });

  uygunsuzDiv.innerHTML = "";
  uygunsuzPalet.forEach(renk => {
    const div = document.createElement("div");
    div.className = "color-box";
    div.style.backgroundColor = renk;
    uygunsuzDiv.appendChild(div);
  });

  sonucDiv.classList.remove("d-none");
  form.classList.add("d-none");
});

tekrarBtn.addEventListener("click", () => {
  sonucDiv.classList.add("d-none");
  form.classList.remove("d-none");
  form.reset();
});