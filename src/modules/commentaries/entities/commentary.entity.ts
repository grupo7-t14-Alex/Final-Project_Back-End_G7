import { randomUUID } from 'node:crypto';
import * as moment from 'moment';

export class Commentary {
    readonly id: string;
    description: string;
    readonly userId: string;
    readonly carId: string;
    readonly createdAt: string;

    constructor() {
        this.id = randomUUID();
        this.createdAt = moment().format('DD/MM/YYYY HH:mm:ss');
    }
}