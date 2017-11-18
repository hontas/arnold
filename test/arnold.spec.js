import { expect } from 'chai';
import Arnold from '../index';

describe('Arnold', () => {
  describe('#says', () => {
    it('should be a function', () => {
      expect(Arnold.says).to.be.a('function');
    });

    it.skip('should return a promise', () => {
      expect(Arnold.says('Hello world')).to.be.instanceof(Promise);
    });

    it('should resolve after speaking', () => {
      return Arnold.says('should finish');
    });
  });

  describe('#saySomething', () => {
    it('should be a function', () => {
      expect(Arnold.saySomething).to.be.a('function');
    });
  });
});
