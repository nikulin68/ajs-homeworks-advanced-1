import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('Order By Props - Level', () => {
  expect(orderByProps(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});

test('Order By Props - Attack', () => {
  expect(orderByProps(obj, ['name', 'attack'])).toEqual([
    { key: 'attack', value: 80 },
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ]);
});

test('Order By Props - Health', () => {
  expect(orderByProps(obj, ['name', 'health'])).toEqual([
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ]);
});