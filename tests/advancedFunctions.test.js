import {
    sumTill,
    makeTree,
    between,
    inArr,
    sumAll,
    combineArr
} from "../src/advancedFunctions.js";

describe("sumTill()", () => {
    it("should sum to 2", () => {
        expect(sumTill(2)).toBe(3);
    });

    it("should sum to 5", () => {
        expect(sumTill(5)).toBe(15);
    });
});

describe("makeTree()", () => {

    let data = [
        { id: 'animals', parent: null },
        { id: 'mammals', parent: 'animals' },
        { id: 'cats', parent: 'mammals' },
        { id: 'dogs', parent: 'mammals' },
        { id: 'labrador', parent: 'dogs' },
        { id: 'retreiver', parent: 'dogs' },
        { id: 'corgi', parent: 'dogs' },
        { id: 'persian', parent: 'cats' },
        { id: 'siamese', parent: 'cats' },
        { id: 'maineCoon', parent: 'cats' }
    ];

    let reutrn = {
        animals: {
            mammals: {
                dogs: {
                    labrador: {},
                    retreiver: {},
                    corgi: {},
                },
                cats: {
                    persian: {},
                    siamese: {},
                    maineCoon: {}
                }
            }
        }
    }

    it("should make a tree", () => {
        expect(makeTree(data, null)).toEqual(reutrn);
    });
});

describe("between() and inArr", () => {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    it("should filter between", () => {
        expect(arr.filter(between(2, 7))).toEqual([2, 3, 4, 5, 6, 7]);
    });

    it("should filter between", () => {
        expect(arr.filter(between(3, 7))).toEqual([3, 4, 5, 6, 7]);
    });

    it("should filter inArr", () => {
        expect(arr.filter(inArr([4, 5, 7, 8, 9, 12, 14]))).toEqual([4, 5, 7, 8, 9]);
    });

    it("should filter inArr", () => {
        expect(arr.filter(inArr([4, 7, 8, 9, 12, 14]))).toEqual([4, 7, 8, 9]);
    });
});

describe("sumAll()", () => {
    it("should sum all the args", () => {
        expect(sumAll(1,2,3,4)).toBe(10);
    });

    it("should sum all the args", () => {
        expect(sumAll(5,6,1)).toBe(12);
    });
});

describe("combineArr()", () => {

    let arrFirst = [1, 2, 3];
    let arrSecond = [4, 5, 6];

    it("should combine the arrays", () => {
        expect(combineArr(arrFirst, arrSecond)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should combine the arrays", () => {
        expect(combineArr(arrSecond, arrFirst)).toEqual([4, 5, 6, 1, 2, 3]);
    });


});