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

const refreshButton = document.getElementById("return-arrow");

//const itemsContainer = [];
const landscapeContainer = document.getElementById("landscape-container");
const container1 = document.getElementById("item-container-1");
const container2 = document.getElementById("item-container-2");
const container3 = document.getElementById("item-container-3");
const container4 = document.getElementById("item-container-4");
const container5 = document.getElementById("item-container-5");
const container6 = document.getElementById("item-container-6");
const container7 = document.getElementById("item-container-7");
const container8 = document.getElementById("item-container-8");
const container9 = document.getElementById("item-container-9");
const container10 = document.getElementById("item-container-10");
const container11 = document.getElementById("item-container-11");
const container12 = document.getElementById("item-container-12");
const container13 = document.getElementById("item-container-13");

const item1 = createItem("cloud.png");
const item2 = createItem("tree.png");
const item3 = createItem("shrooms.png");
const item4 = createItem("trees.png");
const item5 = createItem("tree2.png");
const item6 = createItem("sun.png");
const item7 = createItem("moon.png");
const item8 = createItem("monster2.png");
const item9 = createItem("monster.png");
const item10 = createItem("houses.png");
const item11 = createItem("house.png");
const item12 = createItem("see.png");
const item13 = createItem("deadtree.png");

container1.appendChild(item1);
container2.appendChild(item2);
container3.appendChild(item3);
container4.appendChild(item4);
container5.appendChild(item5);
container6.appendChild(item6);
container7.appendChild(item7);
container8.appendChild(item8);
container9.appendChild(item9);
container10.appendChild(item10);
container11.appendChild(item11);
container12.appendChild(item12);
container13.appendChild(item13);

item1.addEventListener("click", () => {
	const item = createItem("cloud.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
item2.addEventListener("click", () => {
	const item = createItem("tree.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item3.addEventListener("click", () => {
	const item = createItem("shrooms.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item4.addEventListener("click", () => {
	const item = createItem("trees.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
item5.addEventListener("click", () => {
	const item = createItem("tree2.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item6.addEventListener("click", () => {
	const item = createItem("sun.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item7.addEventListener("click", () => {
	const item = createItem("moon.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
item8.addEventListener("click", () => {
	const item = createItem("monster2.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item9.addEventListener("click", () => {
	const item = createItem("houses.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item10.addEventListener("click", () => {
	const item = createItem("see.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
item11.addEventListener("click", () => {
	const item = createItem("house.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});

item12.addEventListener("click", () => {
	const item = createItem("deadtree.png", "absolute");
	landscapeContainer.prepend(item);
	const draggable = new PlainDraggable(item);
});
refreshButton.addEventListener("click", () => {
	console.log("XD");
	window.location.reload();
});
