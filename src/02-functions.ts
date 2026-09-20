import { Friend, Colleague, ColleagueHistory, EmailContact } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend) {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension,
  );
  return result[cs.length - 1];
}

function addColleague(cs: Colleague[], n: string, dept: string, eml: string) {
  const newColleague = {
    name: n,
    department: dept,
    contact: {
      email: eml,
      extension: highestExtension(colleagues.current).contact.extension + 1,
    },
  };
  cs.push(newColleague);
  return newColleague;
}

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max?: number,
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
    end = max < 2 ? 1 : max;
  }
  const sorted = colleagues.sort(sorter); // Colleague[] inferred
  const fullResult = sorted.map((ce) => ({
    name: ce.name,
    email: ce.contact.email,
  }));
  return fullResult.slice(0, end);
}

function findFriends(
  friends: Friend[],

  criterion: (f1: Friend) => boolean,
): Friend[] {
  const found = friends.filter(criterion);
  return found;
}

function addInterest(f: Friend, interest: string): string[] {
  if (f.interests !== undefined) {
    f.interests.push(interest);
  } else {
    f.interests = [interest];
  }
  return f.interests;
}

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension,
    3,
  ),
);

console.log(
  sortColleagues(
    colleagues.current,
    (a, b) => a.name.length - b.name.length,
    1,
  ),
);

console.log(
  sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length),
);

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

console.log(highestExtension(colleagues.current));

console.log(older(friends[0]));

console.log(findFriends(friends, (friend) => friend.name.startsWith("Pa")));
console.log(findFriends(friends, (friend) => friend.age < 35));

console.log(addInterest(friends[0], "Politics"));
