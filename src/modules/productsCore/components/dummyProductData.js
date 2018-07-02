const dummyData = {
  productImages: [
    'https://images-na.ssl-images-amazon.com/images/I/41q%2Bzjt%2B2IL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41%2BM1FEdA8L._AC_SY400_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41XT5-E7ZpL.__AC_SY400_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41nWLrWJRrL.__AC_SY400_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41IdL6NZExL.__AC_SY400_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/4156MrTQmwL._SL500_SS125_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41QOU5CnetL._AC_SY200_.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41qwxWy7XZL._AC_SY400_.jpg',
  ],
  getRandomImage: () => {
    let rand = Math.random() * dummyData.productImages.length;
    rand = rand >= dummyData.productImages.length ? dummyData.productImages.length - 1 : rand;
    rand = rand < 0 ? 0 : rand;
    return dummyData.productImages[Math.floor(rand)];
  },
  getRandomOldPrice: () => (Math.random() * 5000).toFixed(2),
  getRandomRatingCount: () => Math.floor(Math.random() * 50),
  getRandomRating: () => Math.floor(Math.random() * 5),
  getRandomDiscountDecision: () => (Math.random() > 0.7),
  getRandomDiscount: () => ((Math.random() / 4).toFixed(2)),
  getRandomOfferType: () => (['haveDiscount', 'hotOffer', 'offer'][(Math.floor(Math.random() * 3))]),
};

export default dummyData;
