import nlp from 'nlp_compromise';
export const yes = () => 'yes';

export const actor = v => nlp.verb(v).conjugate().actor;
export const gerund = v => nlp.verb(v).conjugate().gerund;
export const bligeify = verb => actor(verb).concat('ation');
const txt = 'there was a sickness in the hospital';

console.log('txt', nlp.statement(txt));
console.log('nlp.text', nlp.statement('sickness'));
