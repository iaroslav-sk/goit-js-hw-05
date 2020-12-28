class Storage {
  constructor(items) {
    this.items = items;
    // console.log(items);
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const newItems = [];
    for (const sendItem of this.items) {
      if (sendItem === item) continue;
      newItems.push(sendItem);
    }
    this.items = newItems;
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
