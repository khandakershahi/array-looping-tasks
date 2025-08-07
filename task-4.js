/**
 * ### Task 4 (Hard)

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

**Input:**
`const statement = 'I am a hard working person'`

**Output:**

`'person working hard a am I'`

---
 */

const statement = 'I am a hard working person';

const new_statement = statement.split(" ");

console.log(new_statement);

const rev_statement = [];

for(let i = new_statement.length-1; i >= 0; i--){
    rev_statement.push(new_statement[i]);
}

console.log(rev_statement);
const rev_statement_string = rev_statement.join(' ');
console.log(rev_statement_string);

