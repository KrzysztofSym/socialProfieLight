document.querySelector(".btn").addEventListener("click", () => {
    const spanElement = document.querySelector(".btn span");
    const pElement = document.querySelector(".btn p");

    if (spanElement.innerText === "person_add") {
        spanElement.innerText = "favorite";
        pElement.innerText = "Thank You!"
    } else {
        spanElement.innerText = "person_add";
        pElement.innerText = "Follow"
    }
});