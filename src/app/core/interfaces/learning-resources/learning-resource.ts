export interface LearningResource {
    id: string,
    name: string,
    tags: string[],
    resourceType: string,
    resourceGroup: string,
    description: string,
    defaultMinutes: number,
    aggregatedRatings: number,
    isOfficial: boolean,
    isApproved: boolean,
    topic: string,
    fileUrl: string
}
