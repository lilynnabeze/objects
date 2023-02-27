// QUESTION 1:

function InstagramPost(
  handleOfAuthor,
  content,
  imageLink,
  numOfViews,
  numOfLikes
) {
  this.handleOfAuthor = handleOfAuthor;
  this.content = content;
  this.imageLink = imageLink;
  this.numOfViews = numOfViews;
  this.numOfLikes = numOfLikes;
}

// QUESTION 2:

let instagramPost1 = new InstagramPost(
  "asonwa_lily",
  "architecture",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Fbackground-music-video%2F&psig=AOvVaw27v-HMJxXtcqlVZETJ4vzj&ust=1677428303226000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDs98aJsf0CFQAAAAAdAAAAABAQ",
  1000,
  650
);
let instagramPost2 = new InstagramPost(
  "aurora",
  "lifestyle",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbuffer.com%2Flibrary%2Fbackground-music-video%2F&psig=AOvVaw27v-HMJxXtcqlVZETJ4vzj&ust=1677428303226000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDs98aJsf0CFQAAAAAdAAAAABAQ",
  40,
  10
);

console.log(instagramPost1);
console.log(instagramPost2);

// QUESTION 3a:

function createPerson(name, age, location) {
  return {
    name: name,
    age: age,
    location: location,
  };
}

const musa = createPerson("Musa Dawodu", 19, "Lagos");
console.log(musa);

// QUESTION 3b:

function createJambScores(eng, gov, lit, crk) {
  return {
    eng: eng,
    gov: gov,
    lit: lit,
    crk: crk,
  };
}

const musaJambScores = createJambScores(70, 85, 82, 94);
console.log(musaJambScores);

musa.jambScores = createJambScores(70, 85, 82, 94);

console.log(musa);

// QUESTION 4:

// Method-1. Object.assign()
// example:
function shoe(color, brand, type) {
  return {
    color: color,
    brand: brand,
    type: type,
  };
}
const shoe1 = shoe("Brown", "Nike", "Sneaker");
console.log(shoe1);

const shoe2 = Object.assign({}, shoe1);

shoe2.color = "White";
console.log(shoe2);

// Method-2. spread syntax
// example:

const shoe3 = { ...shoe1 };
shoe3.color = "Red";
console.log(shoe3);

// Method-3. JSON.parse(JSON.stringify())
// example:

const shoe4 = JSON.parse(JSON.stringify(shoe1));
shoe4.color = "Black";
console.log(shoe4);

// QUESTION 5:

const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};

for (const property in presidentialCandidates) {
  console.log(
    presidentialCandidates[property] +
      " is the presidential candidate of " +
      [property]
  );
}
