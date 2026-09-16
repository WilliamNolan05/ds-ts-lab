import {Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes'
import {friends, colleagues} from './01-basics'

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[])  {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(cs: Colleague[], n: string, dept: string, eml: string){
    
    const newColleague = {
        name: n,
        department: dept, 
        contact: {
            email: eml,
            extension: highestExtension(colleagues.current).contact.extension + 1 
        }
    }
    cs.push(newColleague)
    return(newColleague)
    
}

function sortColleagues(
  colleagues: Colleague[], 
  sorter: (c1: Colleague, c2: Colleague) => number 
): EmailContact[] {
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return result 
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));


addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(highestExtension(colleagues.current));

console.log(older(friends[0]))