import foods from './foods';
import { choice, remove } from './helpers';

const randomfruit = choice(foods);

console.log(`I’d like one ${randomfruit}, please.`);
console.log(`Here you go: ${randomfruit}`);
console.log(`Delicious! May I have another?`);
let remain = remove(foods, randomfruit);
console.log(`I’m sorry, we’re all out. We have ${remain.length} left.`);
console.log(remain);
