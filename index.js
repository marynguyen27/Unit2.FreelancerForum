const FREELANCERS = [
  {
    name: 'Alice',
    occupation: 'Writer',
    startingPrice: 30,
  },
  {
    name: 'Bob',
    occupation: 'Teacher',
    startingPrice: 75,
  },
  {
    name: 'Carol',
    occupation: 'Programmer',
    startingPrice: 100,
  },
  {
    name: 'Sarah',
    occupation: 'Gardener',
    startingPrice: 20,
  },
  {
    name: 'Jennifer',
    occupation: 'Driver',
    startingPrice: 35,
  },
  {
    name: 'George',
    occupation: 'Cleaner',
    startingPrice: 40,
  },
  {
    name: 'Pamela',
    occupation: 'Assistant',
    startingPrice: 85,
  },
  {
    name: 'Olivia',
    occupation: 'Dog Walker',
    startingPrice: 35,
  },
  {
    name: 'Lisa',
    occupation: 'Designer',
    startingPrice: 70,
  },
  {
    name: 'Cassie',
    occupation: 'House Painter',
    startingPrice: 25,
  },
  {
    name: 'Bill',
    occupation: 'Personal Chef',
    startingPrice: 50,
  },
  {
    name: 'Kristie',
    occupation: 'Translator',
    startingPrice: 65,
  },
  {
    name: 'Dave',
    occupation: 'Photographer',
    startingPrice: 55,
  },
  {
    name: 'Fred',
    occupation: 'Hair Stylist',
    startingPrice: 75,
  },
  {
    name: 'Steve',
    occupation: 'Artist',
    startingPrice: 50,
  },
  {
    name: 'Janelle',
    occupation: 'Florist',
    startingPrice: 75,
  },
];

let displayedFreelancers = [...FREELANCERS.slice(0, 2)];
let addFreelancerIntervalId;

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
