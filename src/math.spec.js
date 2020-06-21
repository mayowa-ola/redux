import { isEven } from './math';

describe('isEven', () => {

    it('should equals true if given an even number', () => {
        //Function under test
        const result = isEven(2)
        expect(result).toEqual(true);
    });
    
    it('should equals false if given a odd number', () => {
        //Function under test
        const result = isEven(1);
        expect(result).toEqual(false);
    });
});


