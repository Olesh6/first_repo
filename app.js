import * as fs from 'node:fs';
let a =JSON.stringify({text: 'this text', toketn:121, aa:"sdsdsdada"});

console.log(typeof a);
fs.writeFile('data.json', a, (err) => {
    if (err) {
      console.error('Error writing file:', err);  // Якщо сталася помилка
    } else {
      console.log('Data saved to data.json');  // Повідомлення про успіх
    }
  });

function test(){
	return "I am test function";
}