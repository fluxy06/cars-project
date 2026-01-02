export enum type_car {
  Спорт = "Спорт",
  Седан = "Седан",
  Хечбек = "Хечбек",
  Грузовичек = "Грузовичек",
  Универсал = "Универсал",
}

export enum capacity_car {
  "2-ух местная" = "2-ух местная",
  "4-ех местная" = "4-ех местная",
  "6-ти местная" = "6-ти местная",
  "8-ми местная" = "8-ми местная",
}

// Теперь конвертация enum в массив строк можно через Object.values
export function enumToArray<E extends object>(enm: E): (E[keyof E])[] {
  return Object.values(enm);
}

