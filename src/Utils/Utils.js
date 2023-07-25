class utils {
  static getDollarPrice(price) {
    const formattedPrice = price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formattedPrice;
  }
}

export default utils;
