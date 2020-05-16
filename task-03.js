class Storage {
  constructor(incomStorage) {
    this.items = incomStorage;
  }
  getItems() {
    return this.items;
  }
  addItem(article) {
    this.items.includes(article)
      ? console.log("Is available")
      : this.items.push(article);
  }
  removeItem(article) {
    this.items.includes(article)
      ? this.items.splice(this.items.indexOf(article), 1)
      : console.log("No such article in storage");
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem("Дроид");
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
