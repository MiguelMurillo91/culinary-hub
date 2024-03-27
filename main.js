const cards = document.querySelectorAll(".feature-list-item");
const recipes = document.querySelectorAll(".row-element");

function handleClick(event) {
	const mainLink = event.currentTarget.querySelector(".main-link");
	mainLink.click();
}

cards.forEach((card) => {
	card.addEventListener("click", handleClick);
});
recipes.forEach((recipe) => {
	recipe.addEventListener("click", handleClick);
});
