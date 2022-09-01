import { University } from "./University"

export interface Story {
    id: number,
    userId: number,
    username: string,
    profileImage: string,
    facultyName?: string,
    body: string,
    backgroundColor: string,
    createdAt: number
}

export interface HomeStory {
    lastStoryIdsPerUniversity: LastStoryIdsPerUniversity[]
    university?: University
    stories: Story[]
}

export interface LastStoryIdsPerUniversity {
    universityId: number
    lastStoryIdPerUniversity: number
}

