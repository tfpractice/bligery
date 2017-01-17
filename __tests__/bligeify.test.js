import 'jasmine-expect';
import { actor, bligeify, gerund, } from 'src/bligeify';

console.log('bligeify(dance)', bligeify('dance'));
console.log('gerund(build)', gerund('build'));
console.log('actor(build)', actor('build'));
console.log('bligeify(build)', bligeify('build'));
describe('actor', () => {
  it('returns a the acotr conjugation of the verb', () => {
        // console.log('actor', actor('build'));
    expect(actor('hate')).toEqual('hater');
  });
});
describe('bligeify', () => {
  it('return nlps', () => {
    const res = bligeify('dance');

        // console.log('res', res); console.log('res', res.conjugate());
  });
});
