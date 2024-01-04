import{Document} from 'mongoose'

export interface Ifood extends Document{
    readonly id: number;
    readonly name: string;
    readonly price: string;
    readonly color: string;
}