export interface Unit {
    id: string,
    name: string,
    description: string,
    minutesAggregate: number,
    prerequisites: string[],
    subject: string
}
