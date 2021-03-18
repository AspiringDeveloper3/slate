let color = "white";
let shape = "circle";
const cursor = document.querySelector(".cursor");
const input = document.querySelector("input");

window.addEventListener("mousemove", (event) => {
  cursor.style.top = event.pageY + "px";
  cursor.style.left = event.pageX + "px";
  cursor.style.backgroundColor = color;

  if (shape === "square") {
    cursor.classList = `cursor`;
    cursor.classList.add("square");
  } else if (shape === "rectangle") {
    cursor.classList = `cursor`;
    cursor.classList.add("rect");
  } else if (shape === "circle") {
    cursor.classList = `cursor`;
    cursor.classList.add("circle");
  }
});

$(".draw-area").click((event) => {
  const circle = document.createElement("div");
  circle.classList.add("shape");
  circle.style.borderRadius = `100%`;
  circle.style.backgroundColor = color;
  circle.style.width = `30px`;
  circle.style.height = `30px`;
  $(circle).css({
    top: `${event.pageY}px`,
    left: `${event.pageX}px`,
    position: "absolute",
  });

  $(".draw-area").append(circle);
});

document.querySelectorAll(".fas").forEach((icon) => {
  icon.addEventListener("click", (event) => {

    $("input").css({
      top: `${event.pageY - 30}px`,
      left: `${event.pageX}px`,
      position: "absolute",
    });

    if (icon.classList[1] === "fa-paint-brush") {
      input.classList.toggle("move-in");
      input.placeholder = `Enter color`;
      color = input.value;
    } else if (icon.classList[1] === "fa-shapes") {
      input.classList.toggle("move-in");
      input.placeholder = `Square / Rectangle / Circle`;
      shape = input.value.toLowerCase();
      if (shape === "square") {
        $(".draw-area").click((event) => {
          const square = document.createElement("div");
          square.classList.add("shape", "square");
          square.style.backgroundColor = color;
          $(square).css({
            top: `${event.pageY}px`,
            left: `${event.pageX}px`,
            position: "absolute",
          });

          $(".draw-area").append(square);
        });
      } else if (shape === "rectangle") {
        $(".draw-area").click((event) => {
          const rectangle = document.createElement("div");
          rectangle.classList.add("shape", "rect");
          rectangle.style.backgroundColor = color;
          $(rectangle).css({
            top: `${event.pageY}px`,
            left: `${event.pageX}px`,
            position: "absolute",
          });

          $(".draw-area").append(rectangle);
        });
      } else {
        $(".draw-area").click((event) => {
          const circle = document.createElement("div");
          circle.classList.add("shape");
          circle.style.borderRadius = `100%`;
          circle.style.backgroundColor = color;
          circle.style.width = `30px`;
          circle.style.height = `30px`;
          $(circle).css({
            top: `${event.pageY}px`,
            left: `${event.pageX}px`,
            position: "absolute",
          });

          $(".draw-area").append(circle);
        });
      }
    } else {
      $(".draw-area").empty();
    }
  });
});
