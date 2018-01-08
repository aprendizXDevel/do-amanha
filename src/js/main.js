import "../scss/main.scss";

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {
	if (window.scrollY > 1600) {
		progressBar.classList.add("fix-scroll");
	} else {
		progressBar.classList.remove("fix-scroll");
	}
})