import { type_car } from "./types";
import { BaseInfo } from './baseInfo';

export interface Car{
    id: string,
    name: string,
    image: string,
    type: type_car,
    baseInfo: BaseInfo
}