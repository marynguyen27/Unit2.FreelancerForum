const POSSIBLE_NAMES = [
  'Alice',
  'Bob',
  'Carol',
  'Sarah',
  'Jennifer',
  'George',
  'Pamela',
  'Olivia',
  'Lisa',
  'Cassie',
  'Bill',
  'Kristie',
  'Dave',
  'Fred',
  'Steve',
  'Janelle',
];

const POSSIBLE_OCCUPATIONS = [
  'Writer',
  'Teacher',
  'Programmer',
  'Gardener',
  'Driver',
  'Cleaner',
  'Assistant',
  'Dog Walker',
  'Designer',
  'House Painter',
  'Personal Chef',
  'Translator',
  'Photographer',
  'Hair Stylist',
  'Artist',
  'Florist',
];

const FREELANCERS = [];

function generateRandomFreelancer() {
  const name =
    POSSIBLE_NAMES[Math.floor(Math.random() * POSSIBLE_NAMES.length)];
  const occupation =
    POSSIBLE_OCCUPATIONS[
      Math.floor(Math.random() * POSSIBLE_OCCUPATIONS.length)
    ];
  const startingPrice = Math.floor(Math.random() * 101); // Random price between 0 and 100

  const newFreelancer = { name, occupation, startingPrice };
  FREELANCERS.push(newFreelancer);
}

for (let i = 0; i < 16; i++) {
  generateRandomFreelancer();
}

let displayedFreelancers = [...FREELANCERS.slice(0, 2)];
let addFreelancerIntervalId;

document.addEventListener('DomContentLoaded', () => {
  start();
});

function start() {
  render();
  calculateAveragePrice();
  clearInterval(addFreelancerIntervalId);
  addFreelancerIntervalId = setInterval(addFreelancer, 2000);
}

function render() {
  const freelancers = document.querySelector('#freelancers');
  const freelancersElements = displayedFreelancers.map((freelancer) => {
    const element = document.createElement('li');
    const text = document.createTextNode(
      `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`
    );
    element.appendChild(text);
    return element;
  });
  freelancers.replaceChildren(...freelancersElements);
}

function calculateAveragePrice() {
  if (displayedFreelancers.length === 0) {
    document.getElementById('average-price').textContent = '0';
    return;
  }

  const total = displayedFreelancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  const average = (total / displayedFreelancers.length).toFixed(2);
  document.getElementById('average-price').textContent = average;
}

function addFreelancer() {
  if (displayedFreelancers.length >= FREELANCERS.length) {
    clearInterval(addFreelancerIntervalId);
    return;
  }

  let newFreelancer;
  do {
    newFreelancer = FREELANCERS[Math.floor(Math.random() * FREELANCERS.length)];
  } while (displayedFreelancers.includes(newFreelancer));
  displayedFreelancers.push(newFreelancer);
  render();
  calculateAveragePrice();
}

start();
