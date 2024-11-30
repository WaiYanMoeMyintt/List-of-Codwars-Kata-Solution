function usdcny(usd) {
   const chineseYuan = 6.75;
   const currency =  usd * chineseYuan
   return `${currency.toFixed(2)} Chinese Yuan`;
}
usdcny(5910)
