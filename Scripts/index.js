let icon = document.getElementById("icon");
icon.style.cursor="pointer";
icon.addEventListener("click", function(event) {
    alert("Clicked menu");
    let x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
});


