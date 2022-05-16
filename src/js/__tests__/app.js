import specialInfo from '../app';

test('id действия существует', () => {
  const special = [
    8,
    'Двойной выстрел',
    'http://...',
    'Двойной выстрел наносит двойной урон',
  ];
  expect(specialInfo(8)).toEqual(special);
});

test('id действия существует и описание "засекречено"', () => {
  const special = [
    9,
    'Нокаутирующий удар',
    'http://...',
    'Описание недоступно',
  ];
  expect(specialInfo(9)).toEqual(special);
});

test('id отсутсвует', () => {
  expect(specialInfo(10)).not.toBeTruthy();
});
