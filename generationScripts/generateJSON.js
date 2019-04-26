const faker = require('faker');
const fs = require('fs');

const reviewText = () => {
  let reviewParagraphsArr = [];
  const reviewLength = Math.ceil(Math.random() * 4);
  for (let paragraphs = 0; paragraphs < reviewLength; paragraphs++) {
    reviewParagraphsArr.push(faker.lorem.paragraph());
  }
  return reviewParagraphsArr.join('\n');
};

const generateReview = () => {
    const review = {
      home_id: Math.ceil(Math.random() * 1000000),
      user_name: faker.name.findName(),
      user_photo: faker.image.avatar(),
      review_text: reviewText(),
      accuracy: Math.ceil(Math.random() * 5),
      communication: Math.ceil(Math.random() * 5),
      cleanliness: Math.ceil(Math.random() * 5),
      location: Math.ceil(Math.random() * 5),
      check_in: Math.ceil(Math.random() * 5),
      value: Math.ceil(Math.random() * 5),
      review_date: faker.date.past(),
    };
  return review;
};

const writeAllData = () => {
  // var writeStream = fs.createWriteStream('./output.json');
  var writeStream = fs.createWriteStream('./sample.json');
  writeStream.write("[");
  // var j = 50000000;
  var j = 100;

  const bigWrite = () => {
    var okay = true;
    while (j > 0 && okay) {
      j -= 1;
      if (j === 0) {
        writeStream.write((JSON.stringify(generateReview())));
        writeStream.end("]");
      } else {
        okay = writeStream.write((JSON.stringify(generateReview())) + ",");
      }
    }
    if (j > 0) {
      writeStream.once("drain", bigWrite);
    }
  }
  bigWrite();
}

writeAllData();

// const writeAllDataToCsv = () => {

//   const writeStream = fs.createWriteStream("./reviews.csv");
//   const review = generateReview();
//   const headers = Object.keys(review)
//   headers.map(key => 


// }

