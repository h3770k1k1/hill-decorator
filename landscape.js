function createItem(imgSrc, position = "relative") {
	const item = document.createElement("div");
	item.style.position = position;
	item.classList.add("item");
	const img = document.createElement("img");
	img.src = imgSrc;
	img.classList.add("img");
	item.appendChild(img);
	return item;
}
//const itemsContainer = [];
const landscapeContainer = document.getElementById("landscape-container");
const container = document.getElementById("item-container-1");
const staticItem = createItem("cloud.png");
container.appendChild(staticItem);

staticItem.addEventListener("click", () => {
	const item = createItem("cloud.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
