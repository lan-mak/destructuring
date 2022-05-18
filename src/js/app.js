export default function getSpecial(data) {
  const { special } = data;
  const result = [];

  special.forEach((elem) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = elem;
    result.push({
      id, name, icon, description,
    });
  });

  return result;
}
