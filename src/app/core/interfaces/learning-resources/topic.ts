export interface Topic {
    id: string,
    name: string,
    description: string,
    minutesAggregate: number,
    prerequisites: string[],
    unit: string,
    subjectName: string,
    practiceQuestionsNumber: number,
    practiceDefaultMinutes: number,
    practiceQuestionMark: number
}
