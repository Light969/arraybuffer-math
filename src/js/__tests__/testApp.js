import Daemon from '../Daemon.js';
import Magician from '../Magician.js';

test('Проверяем атаку мага без дурмана', () => {
  const magician = new Magician('Mag');
  magician.attack = 100;
  const result = magician.attack;
  expect(result(2)).toEqual(90);
});

test('Проверяем атаку мага под дурманом', () => {
  const magician = new Magician('Mag');
  magician.attack = 100;
  magician.stoned = true;
  const result = magician.attack;
  expect(result(2)).toEqual(85);
});

test('Проверяем атаку демона без дурмана', () => {
  const daemon = new Daemon('Demon');
  daemon.attack = 100;
  const result = daemon.attack;
  expect(result(2)).toEqual(90);
});

test('Проверяем атаку демона под дурманом', () => {
  const daemon = new Daemon('Demon');
  daemon.attack = 100;
  daemon.stoned = true;
  const result = daemon.attack;
  expect(result(2)).toEqual(85);
});
