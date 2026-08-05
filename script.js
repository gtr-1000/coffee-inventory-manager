const input = document.getElementById("blend-input");

const button = document.getElementById("add-btn");

const list = document.getElementById("blend-list");

button.addEventListener("click", () => {
  const blendName = input.value;
  const li = document.createElement("li");
  li.textContent = blendName;
  list.appendChild(li);
});
