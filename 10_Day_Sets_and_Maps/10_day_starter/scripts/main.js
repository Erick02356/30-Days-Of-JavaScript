// console.log(countries)
// Find a union b
// Find a intersection b
// Find a with b
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let A = new Set(a)
let B = new Set(b)
//let c = [...a,...b]; UNION

const countries2 = ['Finland', 'Sweden', 'Norway']
const names = ['Pepe','Peggy','Nicol','Juan','Cerati']

const namesMap = new Map();

for (let i = 0; i < names.length; i++) {
    namesMap.set(names[i],names[i].length)
}


//let c = a.filter((num)=> B.has(num)) INTERSECION
let c = a.filter((num)=> !B.has(num)) //Diferencia

let C = new Set(c);


const languages = [];
//Forma Imperativa, manera en que lo hice
for (let i = 0; i < countries.length; i++) {
   for (let j = 0; j < countries[i].languages.length; j++) {
    const element = countries[i].languages[j];
    languages.push(element);
   }   
}

//Maneras optimizadas:  Usando flatMap y Set (Forma más moderna y concisa)
const uniqueLanguages = new Set(countries.flatMap(country => country.languages));
console.log(uniqueLanguages.size);
// Usando reduce y Set

const uniqueLanguages2 = new Set(
    countries.reduce((acc, country) => acc.concat(country.languages), [])
  );
  console.log(uniqueLanguages2.size);

//  Usando forEach y Set directamente
const languages2 = new Set();
countries.forEach(country => country.languages.forEach(lang => languages2.add(lang)));
console.log(languages2.size);


const LANGUAGES = new Set(languages)
console.log(LANGUAGES.size)

function mostSpokenLanguages(countries, n) {
  const languages = [];
  //Forma Imperativa, manera en que lo hice
  for (let i = 0; i < countries.length; i++) {
     for (let j = 0; j < countries[i].languages.length; j++) {
      const element = countries[i].languages[j];
      languages.push(element);
     }   
  }

  const object = languages.reduce((acc,item) =>{
    acc[item] = (acc[item] || 0)+1;
    return acc
  },{})

  const sortedLanguages = Object.entries(object).sort((a,b) => b[1]-a[1]).slice(0,n)

  return sortedLanguages.map(([language, count]) => ({ language, count }));

}

console.log(mostSpokenLanguages(countries,5))