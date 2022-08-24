console.log("Hello From Console.log");
const button = document
  .querySelector(".toogle")
  .addEventListener("click", () => {
    console.log("Naimur Rahman");

    document.querySelector(".mobile-nav img ").style.display = "none";
    document.querySelector(".toogle img").style.display = "none";
    document.querySelector(".nav-bar").style.display="block"
  });
