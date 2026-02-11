const input = document.getElementById("textInput");
const output = document.getElementById("output");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const text = input.value.trim();

    if (text !== "") {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      output.appendChild(paragraph);

      input.value = ""; // Clear input after submission
    }
  }
});
