export interface University {
    id: number,
    acronym?: string,
    type: string
    associateName?: string
    parentName?: string,
    name: string,
    address: string,
    simple: string,
    center: number[],
    image: string,
    includes?: IncludeUniversity[]
}

interface IncludeUniversity {
    associateName?: string
    parentName?: string
    name: string
    acronym?: string
    type: string
    address: string
}