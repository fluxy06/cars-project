export enum type_car {
    "Спорт",
    "Седан",
    "Хечбек",
    "Грузовичек",
    "Универсал"
}

export enum capacity_car {
    "2-ух местная",
    "4-ех местная",
    "6-ти местная",
    "8-ми местная"
}


//Функция для конвертации enum => массив строк
export function enumToArray<E extends object>(enm: E): string[] {
    return Object.keys(enm).filter(k => isNaN(Number(k)))
}