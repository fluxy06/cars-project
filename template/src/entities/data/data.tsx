import { type_car } from "@entities/car/types";
import { Car } from "@entities/car/car";




const VOLUMES = ["60л", "70л", "80л", "90л"];
const PEOPLES = ["2", "4", "5", "6", "7"];
const PRICES = [1800, 2200, 2500, 3000, 3500];

const TYPES = [
  type_car.Спорт,
  type_car.Седан,
  type_car.Хечбек,
  type_car.Грузовичек,
  type_car.Универсал,
];

function generateCar(id: number): Car {
  return {
    id,
    name: `Машина ${id}`,
    image: new URL(
      `../../assets/car/cars/cr${id}.svg`,
      import.meta.url
    ).href,
    pricePerDay: PRICES[id % PRICES.length],
    type: TYPES[id % TYPES.length],
    baseInfo: {
      volume: VOLUMES[id % VOLUMES.length],
      manual: true,
      peoples: PEOPLES[id % PEOPLES.length],
    },
  };
}

export const cars: Car[] = Array.from({ length: 12 }, (_, i) =>
  generateCar(i + 1)
);
