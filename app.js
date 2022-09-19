import fetchTabs from './fetchTabs.js';
const tabs = await fetchTabs();
console.log(tabs); 

const scores = [99, 90, 100];

const oldLast = scores [scores.length - 1];

console.log(oldLast);

const newLast = scores.at(-1); 
console.log(newLast);

const string = 'shaghayegh';
console.log(string.at(1));

//fetch('https://www.course-api.com/react-tabs-project')
//.then((resp) => resp.json())
//.then((data) => console.log(data));

//const fetchData = async () => {
const resp = await fetch('https://www.course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);

//fetchData();