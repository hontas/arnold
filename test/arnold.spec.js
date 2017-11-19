import { expect } from 'chai';
import arnoldSrc from '../index.mjs';
import arnoldDist from '../dist/arnold-says';

[arnoldSrc, arnoldDist].forEach((Arnold) => {
  describe('Arnold', () => {
    describe('#says', () => {
      it('should be a function', () => {
        expect(Arnold.says).to.be.a('function');
      });

      it('should return a promise', () => {
        expect(Arnold.says('Hello world')).to.be.instanceof(Promise);
      });

      it('should resolve after speaking', () => {
        return Arnold.says('should finish');
      });
    });
  });
});
