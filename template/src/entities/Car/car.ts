import { type_car } from "./types";
import { BaseInfo } from './baseInfo';

export interface Car{
    id: number,
    name: string,
    image: string,
    pricePerDay: number,
    type: type_car,
    baseInfo: BaseInfo
}