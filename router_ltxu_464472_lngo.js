const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
function addNumbers(a, b) { return a + b; }

const filterEvenNumbers = numbers => numbers.filter(isEven);

68,2,73,72,35,95,29,84,63,76,12,12,62,86,60,3,50,27,64,10,46,70,60,1,99,80,25,95,70,57,12,62,74,81,29,95,78,22,15,15,73,50,61,33,41,92,95,33,77,20,92,67,42,91,15,62,72,54,72,36,76,11,17,50,29,71,73,50,52,22,89,48,12 / true

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
false * true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const getUniqueValues = array => [...new Set(array)];

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const isPalindrome = str => str === str.split("").reverse().join("");
orange

console.log(getRandomString());
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
63,99,18,57,50,41,72,74,25,33,96,36,32,41,17,35,31,69,71,75,28,88,51,15,54,27,59,65,34,15,89,4,43,43,87,38 / orange
const deepClone = obj => JSON.parse(JSON.stringify(obj));
65,22,99,17,49,7,87,15,3,20,36,21,62,71,53,88,17,58,89,12,27,80,29,8,3,58,18,45,32,97,17,0,60,22,21,28,83,52,33,50,32,66,56,73,95,18,50,99,71,64,29,6,10,71,67,31,16,89,10,24,0,51,38,64,88,67,51,64,30,11,59,33,79,25,45,59,17,37,28,22 * 15,98,28,72,17,53,15,68,72,98,89,60,4,47,41,67,5,82,48,22,95,18,18,50,52,35,39,79,18,12,78,2,21,52,66,30,64,61,34,38,66,13,70,42,73,93,46,0,22,71,56,45,74,46,11,62,9,97,17,87,65,82,72,6,76,2,65,96,41,51,80,61,53,70,56,35,66
const formatDate = date => new Date(date).toLocaleDateString();

