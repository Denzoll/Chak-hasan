const div = document.querySelector(".cont");
const p = document.createElement('p')
const img = document.createElement("img");
const btn = document.getElementById("btn");

div.append(btn, p);


async function get() {
  p.innerHTML = ''
  let response = await fetch(
    "https://api.chucknorris.io/jokes/random"
  );
  let text = await response.json();

  p.textContent = text.value;
  console.log(text);
}
btn.addEventListener("click", () => {
  get();
});
