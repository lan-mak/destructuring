const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function specialInfo(id) {
  const { special: [...data] } = character;
  const itemId = id;
  let arrayData;

  data.forEach((item) => {
    if (item.id === itemId) {
      const {
        id: specialId, name, icon, description = 'Описание недоступно',
      } = item;
      arrayData = [specialId, name, icon, description];
    }
  });

  return arrayData;
}
