let products = [];
let topPicks = [];
let counter = 0;

for (let i = 0; i < 100; i++) {
  products.push({
    id: counter++,
    name: "Product" + counter,
    price: (Math.random() * 100).toFixed(2),
    description: "Description Number" + counter,
    images: [
      {
        url: `https://picsum.photos/200/300?random=${counter}`,
      },
    ],
    sizes: [
      {
        stock: Math.floor(Math.random() * 100),
        size: makeSize(),
      },
    ],
    orientation: makeOrientation(),
    views: Math.floor(Math.random() * 1000),
    clothingType: makeType(),
  });
}

counter = 0;

for (let i = 0; i < 10; i++) {
  topPicks.push({
    id: counter++,
    name: "Product" + counter,
    price: (Math.random() * 100).toFixed(2),
    description: "Description Number" + counter,
    images: [
      {
        url: `https://picsum.photos/200/300?random=${counter}`,
      },
    ],
    sizes: [
      {
        stock: Math.floor(Math.random() * 100),
        size: makeSize(),
      },
    ],
    orientation: makeOrientation(),
    views: Math.floor((1 / counter) * 1000),
    clothingType: makeType(),
  });
}
function makeOrientation() {
  const orientations = ["MASCULINE", "FEMININE", "UNISEX"];
  const randomIndex = Math.floor(Math.random() * 3);
  return orientations[randomIndex];
}
function makeType() {
  const type = ["TSHIRTS", "SHORTS", "PANTS", "JACKETS"];
  const randomIndex = Math.floor(Math.random() * 4);
  return type[randomIndex];
}
function makeSize() {
  const size = ["XS", "S", "M", "L"];
  const randomIndex = Math.floor(Math.random() * 4);
  return size[randomIndex];
}

export { products, topPicks };
