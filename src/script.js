const items = [
  { id: 1, name: "pizza", quantity: 1 },
  { id: 2, name: "burger", quantity: 1 },
];

function handleAddItem({ id, name, quantity }) {
  console.log(id, name, quantity);
}

const newItem = { id: 2, name: "french-fries", quantity: 5 };
handleAddItem({ ...newItem });
