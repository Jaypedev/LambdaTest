const loading = document.getElementById("loading");
const links = document.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    loading.style.display = "block";

    setTimeout(function () {
      window.location.href = link.href;
    }, 2000); // 2 seconds delay
  });
});
