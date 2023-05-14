var main = document.getElementById("color");

createColor("Purple", "#9059ff", true)
createColor("Red", "#922724", true)
createColor("Dark Gray/Grey", "#1c1d21", true)
createColor("Light Purple", "#8c8cff", true)

 
function createColor(name, code, isNew) {
    const start = document.createElement("div");
    start.classList = "aColor";

    const name2 = document.createElement("p");
    name2.textContent = name + ": " + code;

    const colorShow = document.createElement("div");
    colorShow.classList = "colorShow";
    colorShow.style.backgroundColor = code;

    main.appendChild(start);
    start.appendChild(name2);
    start.appendChild(colorShow);

  if (isNew == true) {
      start.classList = "aColor new";
      const newTag = document.createElement("div");
      newTag.classList = "newBg"
      const newText = document.createElement("p");
      newText.textContent = "New!"
      start.insertBefore(newTag, name2);
      newTag.appendChild(newText);
  };
}
