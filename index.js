const FREELANCERS = [
  {
    name: 'Alice',
    occupation: 'Writer',
    startingPrice: 30,
  },
  {
    name: 'Bob',
    occupation: 'Teacher',
    startingPrice: 50,
  },
  {
    name: 'Carol',
    occupation: 'Programmer',
    startingPrice: 70,
  },
  {
    name: 'Sarah',
    occupation: 'Gardener',
    startingPrice: 50,
  },
  {
    name: 'Jennifer',
    occupation: 'Driver',
    startingPrice: 50,
  },
  {
    name: 'George',
    occupation: 'Cleaner',
    startingPrice: 60,
  },
  {
    name: 'Pamela',
    occupation: 'Assistant',
    startingPrice: 85,
  },
  {
    name: 'Olivia',
    occupation: 'Dog Walker',
    startingPrice: 30,
  },
  {
    name: 'Lisa',
    occupation: 'Designer',
    startingPrice: 70,
  },
  {
    name: 'Cassie',
    occupation: 'House Painter',
    startingPrice: 40,
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
];

render();

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

function render() {
  const freelancers = document.querySelector('#freelancers');
  const freelancersElements = FREELANCERS.map((freelancer) => {
    const element = document.createElement('li');
    const text = document.createTextNode(
      `${freelancer.name}, ${freelancer.occupation}, $${freelancer.startingPrice}`
    );
    element.appendChild(text);
    return element;
  });
  freelancers.replaceChildren(...freelancersElements);
}

function addFreelancer() {}
