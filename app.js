let color = "white";
let shape = "circle";
const input = document.querySelector("input");

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
    input.classList.toggle("move-in");
    $("input").css({
      top: `${event.pageY - 30}px`,
      left: `${event.pageX}px`,
      position: "absolute",
    });

    if (icon.classList[1] === "fa-paint-brush") {
      color = input.value;
    } else if (icon.classList[1] === "fa-shapes") {
      shape = input.value;
      if (shape === "square") {
        $(".draw-area").click((event) => {
          const square = document.createElement("div");
          square.classList.add("shape");
          square.style.borderRadius = `5px`;
          square.style.backgroundColor = color;
          square.style.width = `30px`;
          square.style.height = `30px`;
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
          rectangle.classList.add("shape");
          rectangle.style.borderRadius = `5px`;
          rectangle.style.backgroundColor = color;
          rectangle.style.width = `45px`;
          rectangle.style.height = `30px`;
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
          circle.style.borderRadius = `5px`;
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
    }
  });
});
