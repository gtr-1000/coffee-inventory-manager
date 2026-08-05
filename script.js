const input = document.getElementById("blend-input");

const button = document.getElementById("add-btn");

const list = document.getElementById("blend-list");

const errorMessage = document.getElementById("error-message");

button.addEventListener("click", () => {
  if(!input.value.trim()){
    errorMessage.textContent = "Please enter a blend name";
    return;
  };
  
  const blendName = input.value;
  const li = document.createElement("li");
  li.textContent = blendName;
  list.appendChild(li);

  input.value = ""; 
  errorMessage.textContent = ""; 
  
});
