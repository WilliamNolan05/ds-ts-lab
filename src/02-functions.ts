import {Friend, Colleague } from './myTypes'
import {friends, colleagues} from './01-basics'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

function addColleague(cs: Colleague[], n: string, dept: string, eml: string) : Colleague {
    
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

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(highestExtension(colleagues.current));

console.log(older(friends[0]))