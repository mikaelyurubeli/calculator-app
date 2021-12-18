import Calc, { dataType } from './calc';

test('Test "ADD" tanpa check input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: false},
    {id: 2, value: "2", checked: false},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'ADD'

  const result = Calc(input, operator)
  expect(result).toEqual(false);
});

test('Test "ADD" check 1 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: false},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'ADD'

  const result = Calc(input, operator)
  expect(result).toEqual(false);
});

test('Test "ADD" check 2 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'ADD'

  const result = Calc(input, operator)
  expect(result).toEqual(12);
});

test('Test "ADD" check 3 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: true},
  ]

  const operator: string = 'ADD'

  const result = Calc(input, operator)
  expect(result).toEqual(17);
});

test('Test "SUBTRACT" check 1 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: false},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'SUBTRACT'

  const result = Calc(input, operator)
  expect(result).toEqual(false);
});

test('Test "SUBTRACT" check 2 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'SUBTRACT'

  const result = Calc(input, operator)
  expect(result).toEqual(8);
});

test('Test "SUBTRACT" check 3 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: true},
  ]

  const operator: string = 'SUBTRACT'

  const result = Calc(input, operator)
  expect(result).toEqual(3);
});

test('Test "MULTIPLY" check 1 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: false},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'MULTIPLY'

  const result = Calc(input, operator)
  expect(result).toEqual(false);
});

test('Test "MULTIPLY" check 2 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'MULTIPLY'

  const result = Calc(input, operator)
  expect(result).toEqual(20);
});

test('Test "MULTIPLY" check 3 input positive', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: true},
  ]

  const operator: string = 'MULTIPLY'

  const result = Calc(input, operator)
  expect(result).toEqual(100);
});

test('Test "MULTIPLY" check 3 input negative', () => {
  const input: Array<dataType> = [
    {id: 1, value: "-10", checked: true},
    {id: 2, value: "-2", checked: true},
    {id: 3, value: "-5", checked: true},
  ]

  const operator: string = 'MULTIPLY'

  const result = Calc(input, operator)
  expect(result).toEqual(-100);
});

test('Test "DIVIDE" check 1 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: false},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'DIVIDE'

  const result = Calc(input, operator)
  expect(result).toEqual(false);
});

test('Test "DIVIDE" check 2 input', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: false},
  ]

  const operator: string = 'DIVIDE'

  const result = Calc(input, operator)
  expect(result).toEqual(5);
});

test('Test "DIVIDE" check 3 input positive', () => {
  const input: Array<dataType> = [
    {id: 1, value: "10", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "5", checked: true},
  ]

  const operator: string = 'DIVIDE'

  const result = Calc(input, operator)
  expect(result).toEqual(1);
});

test('Test "DIVIDE" check 3 input negative', () => {
  const input: Array<dataType> = [
    {id: 1, value: "-10", checked: true},
    {id: 2, value: "-2", checked: true},
    {id: 3, value: "-5", checked: true},
  ]

  const operator: string = 'DIVIDE'

  const result = Calc(input, operator)
  expect(result).toEqual(-1);
});

test('Test "DIVIDE" check 3 input hasil rounding', () => {
  const input: Array<dataType> = [
    {id: 1, value: "1", checked: true},
    {id: 2, value: "2", checked: true},
    {id: 3, value: "3", checked: true},
  ]

  const operator: string = 'DIVIDE'

  const result = Calc(input, operator)
  expect(result).toEqual(0.167);
});