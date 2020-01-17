/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

class Carousel {
  constructor(items) {
    this._index = 0;
    this._items = items;
  }

  get index() {
    return this._index;
  }

  set index(value) {
    this._index = value;
    for (const img of this.imgs.children) img.style.display = "none";

    const index = value >= 0 ? value % this.imgs.children.length : Math.abs(this.imgs.children.length + value % this.imgs.children.length) % 4;

    this.imgs.children[index].style.display = "initial";
  }

  dom() {
    const carousel = createNode("div", {classes: ["carousel"]});

    const left = createNode("div", {classes: ["left-button"]});
    left.addEventListener("click", () => this.index -= 1);
    carousel.appendChild(left);

    this.imgs = createNode("div");
    for (const item of this._items) this.imgs.appendChild(createNode("img", {src: item}));
    carousel.appendChild(this.imgs);

    const right = createNode("div", {classes: ["right-button"]});
    right.addEventListener("click", () => this.index += 1);
    carousel.appendChild(right);

    this.index = 0;
    return carousel;
  }
}

const carousel = new Carousel(["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]);

document.querySelector(".carousel-container").appendChild(carousel.dom());
