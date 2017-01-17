import 'jasmine-expect';
import { yes, } from 'src';

describe('yes', () => {
  it('returns a string', () => {
    expect(yes()).toEqual('yes');
  });
});
