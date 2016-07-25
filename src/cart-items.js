class cartItem {

  constructor(item, count) {
    this.count = count;
    this.item = item;

  }

  static buildCartItems(tags, allItems) {
    const cartItems = [];

    for (const tag of tags) {

      const tagArray = tag.split('-');
      const barcode = tagArray[0];
      const count = parseFloat(tagArray[1] || 1);

      const cartItem = cartItems.find(cartItem => cartItem.item.barcode === barcode);

      if (cartItem) {
        cartItem.count += count;
      } else {
        const item = allItems.find(item => item.barcode === barcode);
        cartItems.push(new cartItem(count, item));
      }
    }

    return cartItems;
  }
}
module.exports = cartItem;