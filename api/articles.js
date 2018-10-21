let articles = [];
for (let index = 1; index <= 12; index++) {
  articles.push({
    imageUrl: require(`./images/img_${index}.jpg`),
    category: 'Lifestyle',
    publishedAt: 'March 15, 2018',
    commentsCount: 2 + index,
    title: 'There’s a Cool New Way for Men to Wear Socks and Sandals',
    upsert:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium'
  });
}

export default articles;
