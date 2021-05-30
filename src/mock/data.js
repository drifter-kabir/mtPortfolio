import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Full Stack Developer',
  lang: '',
  description: 'I am a MERN stack developer. I started learning from freecodecamp and earned their certifications. Waiting to join as a MERN stack developer. Preferably as back-end developer.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Milton Kabir',
  subtitle: 'I am a Full Stack Web Developer',
  cta: 'insufficient???',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_6421.JPG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '1.Personal-Library.png',
    title: 'Anonymous-Message-Board',
    info: 'I have build this app using web app with HelmetJS with CRUD.\n1. User can send a POST request to /api/threads/{board} with form data including text and delete_password.\n2. User can send a GET request to /api/threads/{board}.\n3. User can send a PUT request to /api/threads/{board}.\n4. User can send a DELETE request to /api/replies/{board}',
    info2: '',
    url: 'https://boilerplate-project-messageboard.miltonkabir.repl.co/',
    repo: 'https://github.com/drifter-kabir/Legacy-Information-Security-and-Quality-Assurance/tree/main/Anonymous%20Message%20Board', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '4.Issue-Tracker.png',
    title: 'Issue-Tracker',
    info: 'I have completed this project with CRUD. I have written tests with Chai to ensure your applications work the way user expect them to.\n1.User can send a POST request to /api/issues/{projectname} \n2. User can send a GET request to /api/issues/{projectname} for an array of all issues for that specific projectname, with all the fields present for each issue.\n3.User can send a PUT request to /api/issues/{projectname} with an _id and one or more fields to update.\n4.User can send a DELETE request to /api/issues/{projectname} with an _id to delete an issue.',
    info2: '',
    url: 'https://boilerplate-project-issuetracker-1.miltonkabir.repl.co/',
    repo: 'https://github.com/drifter-kabir/Quality-Assurance/tree/main/Issue%20Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '3.Sudoku-Solver.png',
    title: 'Sudoku-Solver',
    info: 'I have written tests with Chai to ensure your applications work the way user expect them to.\n1. User can POST /api/solve with form data containing puzzle which will be a string containing a combination of numbers (1-9) and periods . to represent empty spaces. The returned object will contain a solution property with the solved puzzle.\n 2.The return value from the POST to /api/check will be an object containing a valid property, which is true if the number may be placed at the provided coordinate and false if the number may not.',
    info2: '',
    url: 'https://boilerplate-project-sudoku-solver.miltonkabir.repl.co/',
    repo: 'https://github.com/drifter-kabir/Quality-Assurance/tree/main/Sudoku%20Solver', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '1.Personal-Library.png',
    title: 'Personal-Library',
    info: "Using Chai, I have written tests that describe my program's requirements and see if my program meets them. Such as: \n1. User can send a POST request to /api/books with title as part of the form data to add a book. \n2.User can send a GET request to /api/books and receive a JSON response representing all the books.\n3. User can send a DELETE request to /api/books/{_id} to delete a book from the collection.",
    info2: '',
    url: 'https://boilerplate-project-library-1.miltonkabir.repl.co/',
    repo: 'https://github.com/drifter-kabir/Quality-Assurance/tree/main/Personal%20Library', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '11.Visualize-Data-with-a-Choropleth-Map.png',
    title: 'Visualize Data with a Choropleth Map',
    info: 'I imported some JSON data with geographical and educational data about counties in the United States and use d3 to render a Choropleth Map, by converting topojson into geojson and then using the geoPath() method to draw paths.',
    info2: '',
    url: 'https://codepen.io/kmilton/full/abJoQBX',
    repo: 'https://github.com/drifter-kabir/Data-Visualization-Certifications/tree/main/Visualize%20Data%20with%20a%20Choropleth%20Map', // if no repo, the button will not show up
  },
];

// skill DATA
export const skillData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/drifter_kabir',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/milton-kabir-318152213/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/drifter-kabir',
    },
  ],
};
