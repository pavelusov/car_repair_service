export abstract class Shift {
    abstract startTime: string;
    abstract endTime: string;

    getShift(): string {
        return `${this.startTime} - ${this.endTime}`;
    }
}

class MorningShift extends Shift {
    endTime = '8:00';
    startTime = '14:00';

    static create(): Shift {
        return new MorningShift();
    }
}

class AfternoonShift extends Shift {
    endTime = '12:00';
    startTime = '20:00';

    static create(): Shift {
        return new AfternoonShift();
    }
}

export const morningShift = MorningShift.create();
export const afternoonShift = AfternoonShift.create();
