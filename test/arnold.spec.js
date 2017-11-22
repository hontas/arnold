import { expect } from 'chai';
import sinon from 'sinon';
import arnoldSrc from '../index.mjs';
import arnoldDist from '../dist/arnold-says';
import { speechSynthesisUtteranceApi } from './test-setup';

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

    describe('rejecting', () => {
      const errorEvent = { error: 'SHOULD FAIL' };

      before(() => {
        sinon.stub(speechSynthesisUtteranceApi, 'addEventListener')
          .callsFake((event, fn) => {
            if (event === 'error') {
              setTimeout(() => fn(errorEvent), 1);
            };
          });
      });

      after(() => {
        speechSynthesisUtteranceApi.addEventListener.restore();
      });

      it('should reject on error', () => {
        return Arnold.says('should not finish')
          .catch((error) => {
            expect(error).to.eql(errorEvent.error);
          });
      });
    });
  });
});
