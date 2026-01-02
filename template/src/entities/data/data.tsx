import { capacity_car, type_car } from "@entities/car/types";
import { Car } from "@entities/car/car";




const VOLUMES = ["60л", "70л", "80л", "90л"];
const PRICES = [1800, 2200, 2500, 3000, 3500];

const PEOPLES = [
  capacity_car["2-ух местная"],
  capacity_car["4-ех местная"],
  capacity_car["6-ти местная"],
  capacity_car["8-ми местная"]
];
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
