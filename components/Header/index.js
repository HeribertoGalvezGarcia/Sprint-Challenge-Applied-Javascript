// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function createNode(type, {classes = [], ...rest} = {}) {
  const node = document.createElement(type);
  node.classList.add(...classes);
  for (const [attribute, value] of Object.entries(rest)) node[attribute] = value;
  return node;
}

function Header() {
  const node = createNode("div", {classes: ["header"]});

  node.appendChild(createNode("span", {classes: ["date"], textContent: "SMARCH 28, 2019"}));
  node.appendChild(createNode("h1", {textContent: "Lambda Times"}));
  node.appendChild(createNode("span", {classes: ["temp"], textContent: "98°"}));

  return node;
}

document.querySelector(".header-container").appendChild(Header());
