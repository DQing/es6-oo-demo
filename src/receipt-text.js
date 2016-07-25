class ReceiptText {

  static buildReceiptText(receipt) {
    function formatMoney(money) {
      return money.toFixed(2);
    }


    let receiptItemsText = receipt.receiptItems
      .map(receiptItem => {
        const cartItem = receiptItem.cartItem;
        return `名称：${cartItem.item.name}，\
数量：${cartItem.count}${cartItem.item.unit}，\
单价：${formatMoney(cartItem.item.price)}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
      })
      .join('\n');

    return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(receipt.total)}(元)
节省：${formatMoney(receipt.savedTotal)}(元)
**********************`;
  }
  
}
module.exports = ReceiptText;
