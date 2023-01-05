import { validateId } from "../../validator.js";

describe('validateId', ()=> {
    it('should return an object with validation details for a valid id', () => {
        const myId = 9492424;
        const expected = { 
            status: true,
            error: "", 
            data: myId };

        const actual = validateId(myId.toString());
        expect(actual.status).toEqual(expected.status);
        expect(actual.data).toEqual(expected.data);        
    });

    it('should flag an unset id', ()=> {        
        const expected = { status: false };

        const actual = validateId(null);
        expect(actual.status).toEqual(expected.status);
    });

    it('should flag an id that contains no numbers', ()=> {
        const testId = 'fransicadsjiowj';
        const expected = { status: false };

        const actual = validateId(testId);
        expect(actual.status).toEqual(expected.status);
    });

    it('should not allow an id of 0', ()=> {
        const testId = 0;
        const expected = { status: false };
        const actual = validateId(testId);
        expect(actual.status).toEqual(expected.status);
    });

    it('should return data in integer format', ()=> {        
        const actual = validateId(24542524);        
        expect(typeof actual.data).toBe("number");
    });   

    it('should correctly deal with a string with a leading 0', ()=> {        
        const testId = 24923431;
        const actual = validateId(`0${testId}`);        
        expect(actual.status).toEqual(true);
        expect(actual.data).toEqual(testId);
    });   
});