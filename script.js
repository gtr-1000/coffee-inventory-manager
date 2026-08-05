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
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  li.textContent = blendName;
  li.appendChild(removeButton);
  list.appendChild(li);

  removeButton.addEventListener("click", () => {
   li.remove();
});


  input.value = ""; 
  errorMessage.textContent = ""; 
  input.focus();
  
});

