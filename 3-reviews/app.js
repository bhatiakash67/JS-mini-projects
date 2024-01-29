const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?auto=compress&cs=tinysrgb&w=600',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=400',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

let currentReviewIndex = 0;

const image = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
const prevbtn = document.querySelector(".prev-btn")
const nextbtn = document.querySelector(".next-btn")
const randomReview = document.querySelector(".random-btn")

function currentReview() {
  let currentReviewData = reviews[currentReviewIndex]
  image.src = currentReviewData.img;
  author.textContent = currentReviewData.name
  job.textContent = currentReviewData.job
  info.textContent = currentReviewData.text
}

currentReview()

prevbtn.addEventListener("click", () => {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1
  }
  currentReview()
})

nextbtn.addEventListener("click", () => {
  currentReviewIndex++;
  if(currentReviewIndex >= reviews.length){
    currentReviewIndex = 0;
  }
  currentReview()
})

randomReview.addEventListener("click", () => {
  currentReviewIndex = Math.floor(Math.random() * reviews.length)
  currentReview()
})