import { HomeStory, LastStoryIdsPerUniversity, Story } from "../../ts/interfaces/Story"
import { University } from "../../ts/interfaces/University";

export function fetchStories(universityId?: number) {

    return new Promise<{ data: HomeStory }>((resolve) => {
        setTimeout(() => resolve({
            data: {
                lastStoryIdsPerUniversity: apiLastStoriesPerUni,
                university: apiStories.find(({ university }) => university.id === universityId)?.university,
                stories: apiStories.find(({ university }) => university.id === universityId)?.stories ?? []
            }
        }), 1000)
    })
}

export type PostStory = {
    userId: number,
    universityId: number,
    body: string,
    backgroundColor: string,
}

type PostStoryRes = {
    lastStoryIdPerActualUniversity: LastStoryIdsPerUniversity,
    story: Story
}

export function postStory(story: PostStory) {
    const latestStoryId = apiLastStoriesPerUni[apiLastStoriesPerUni.length - 1].lastStoryIdPerUniversity + 1

    return new Promise<{ data: PostStoryRes }>((resolve) => {
        setTimeout(() => resolve({
            data: {
                story: {
                    id: latestStoryId,
                    userId: story.userId,
                    profileImage: 'https://ui-avatars.com/api/?name=John+Doe',
                    username: 'sergigarciiaa',
                    body: story.body,
                    backgroundColor: story.backgroundColor,
                    createdAt: Date.now(),
                },
                lastStoryIdPerActualUniversity: {
                    universityId: story.universityId,
                    lastStoryIdPerUniversity: latestStoryId
                }
            }
        }), 1000)
    })
}

export const myLatestStoriesIds: LastStoryIdsPerUniversity[] = [
    {
        universityId: 35,
        lastStoryIdPerUniversity: 4
    }]


type CustomApi = {
    university: University,
    stories: Story[]
}

const apiLastStoriesPerUni: LastStoryIdsPerUniversity[] = [
    {
        universityId: 35,
        lastStoryIdPerUniversity: 4
    },
    {
        universityId: 11,
        lastStoryIdPerUniversity: 8
    },
    {
        universityId: 58,
        lastStoryIdPerUniversity: 10
    },
    {
        universityId: 1,
        lastStoryIdPerUniversity: 12
    },
    {
        universityId: 45,
        lastStoryIdPerUniversity: 14
    },
    {
        universityId: 119,
        lastStoryIdPerUniversity: 16
    },
    {
        universityId: 114,
        lastStoryIdPerUniversity: 18
    },
    {
        universityId: 10,
        lastStoryIdPerUniversity: 20
    },
    {
        universityId: 49,
        lastStoryIdPerUniversity: 22
    },
    {
        universityId: 65,
        lastStoryIdPerUniversity: 24,
    },
    {
        universityId: 50,
        lastStoryIdPerUniversity: 26
    },
    {
        universityId: 77,
        lastStoryIdPerUniversity: 28
    },
    {
        universityId: 83,
        lastStoryIdPerUniversity: 30
    }

]

const apiStories: CustomApi[] =
    [
        {
            university: {
                id: 35,
                parentName: "Universitat Autònoma de Barcelona",
                acronym: "UAB",
                type: "campus",
                name: "Campus de Bellaterra",
                address: "Plaça Cívica, 08193 Bellaterra, Barcelona",
                simple: "uab bellaterra",
                image: "uab.png",
                center: [
                    41.50613010080779,
                    2.103939945863225
                ]
            },
            stories: [
                {
                    id: 1,
                    userId: 1,
                    username: 'sergigarciiaa',
                    profileImage: 'https://picsum.photos/100/100',
                    body: "He visto a una chica en la biblioteca de humanidades que me he enamorado, creo que es mi crush ahora mismo jejejeje",
                    backgroundColor: 'green',
                    facultyName: 'Facultat de Medicina',
                    createdAt: Date.now() - 100000
                },
                {
                    id: 2,
                    userId: 2,
                    username: 'lauramariagarciiaa',
                    profileImage: 'https://picsum.photos/100/95',
                    body: "He visto a un chico en la facultad de ingenieria que era alto y morena, me gustaría saber quien es jejeje",
                    backgroundColor: 'blue',
                    createdAt: Date.now() - 100000
                },
                {
                    id: 3,
                    userId: 2,
                    username: 'mariarobledojaja',
                    profileImage: 'https://picsum.photos/100/95',
                    body: "Estoy buscando a gente para hacer un equipo de baloncesto, por favor contactadme si vosotros igual",
                    backgroundColor: 'green',
                    createdAt: Date.now() - 90000
                },
                {
                    id: 4,
                    userId: 2,
                    username: 'victorberni',
                    profileImage: 'https://picsum.photos/100/95',
                    body: "que locura es esta app, se esta petando bastante la verdad y que me alegro jejjajaajaj",
                    backgroundColor: 'brown',
                    createdAt: Date.now() - 85000
                },
            ],
        },
        {
            university: {
                id: 11,
                parentName: "Universitat Internacional de Catalunya",
                acronym: "UIC",
                type: "campus",
                name: "Campus Barcelona",
                address: "C. de la Immaculada, 22, 08017 Barcelona",
                simple: "uic barcelona",
                image: "uic.png",
                includes: [
                    {
                        "parentName": "Universitat Internacional de Catalunya",
                        "name": "Edificis Delta i Gamma",
                        "type": "campus",
                        "acronym": "UIC",
                        "address": "Carrer de Terré, 11-19, 08017 Barcelona"
                    }
                ],
                center: [
                    41.40575017098406,
                    2.123592202116646
                ]
            },
            stories: [
                {
                    id: 5,
                    userId: 2,
                    username: 'robertocarlos',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'jaja soy roberto carlos un latino muy sexy y estoy buscando a una buena moza jejeeje',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000
                },
                {
                    id: 6,
                    userId: 2,
                    username: 'jaumesoburats',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'estoy q este año me saco la carrera ya veras ,solo hay q echarle mil y una horas',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 7,
                    userId: 2,
                    username: 'papadopaulos',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'budno chavales q esto ya se termina al fina, despues de dedicarle mil y una horas',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 8,
                    userId: 2,
                    username: 'cataclismo',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'que gupo es esto jajaj la verdad despues de dedicarle mil y una horas',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                id: 58,
                parentName: "Universitat de Vic",
                acronym: "UVic",
                type: "campus",
                name: "Masia de la Torre dels Frares",
                address: "Carrer d’en Perot Rocaguinarda, 17, 08500 Vic, Barcelona",
                simple: "uvic masia",
                image: "uvic.jpg",
                center: [
                    41.93138433479263,
                    2.245997677972732
                ]
            },
            stories: [
                {
                    id: 9,
                    userId: 2,
                    username: 'papasito',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'apapapsasuifei paspapito manda jjaj y tsnto jdoer horas',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 10,
                    userId: 2,
                    username: 'papadopaulos',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'trmeenodo cualo que me gasto esq no se puede ser mejor',
                    backgroundColor: 'blue',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                id: 1,
                parentName: "Universitat Politècnica de Catalunya",
                acronym: "UPC",
                type: "campus",
                name: "Barcelona-Campus Diagonal Nord",
                address: "Edifici PO (Poliesportiu) - Campus Nord, Carrer de Jordi Girona, 1-3, 08034 Barcelona",
                simple: "upc diagonal nord",
                image: "upc.png",
                center: [
                    41.388378440945935,
                    2.1132922874645637
                ]
            },
            stories: [
                {
                    id: 11,
                    userId: 2,
                    username: 'royer',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'gerlpglgrglalrleagvrgv',
                    backgroundColor: 'blue',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 12,
                    userId: 2,
                    username: 'mamasitaaa',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'kelapasadkakl elfkleklfwlknlkdklwafklkl eaeknfleklnfnklalknef',
                    backgroundColor: 'purple',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 45,
                "parentName": "Universitat Pompeu Fabra",
                "acronym": "UPF",
                "type": "campus",
                "name": "Campus Ciutadella",
                "address": "Carrer de Ramon Trias Fargas, 25, 27, 08005 Barcelona",
                "simple": "upf ciutadella",
                "image": "upf.png",
                "center": [
                    41.38963997926792,
                    2.1903685995772175
                ]
            },
            stories: [
                {
                    id: 13,
                    userId: 2,
                    username: 'dcaniwest',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'kelapasadkaerag gregeragrg',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 14,
                    userId: 2,
                    username: 'katasusts',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 119,
                "type": "school",
                "parentName": "Davinci Escola d'Art",
                "name": "Davinci Barcelona",
                "address": "C/ de Roger de Llúria, 104, Principal, 1a, 08037 Barcelona",
                "simple": "davinci barcelona",
                "image": "davinci.jpg",
                "center": [
                    41.396340948318155,
                    2.1650192958778196
                ]
            },
            stories: [
                {
                    id: 15,
                    userId: 2,
                    username: 'katasusts',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 16,
                    userId: 2,
                    username: 'rreagrgrgr',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 114,
                "type": "faculties",
                "parentName": "Fundació Conservatori Liceu",
                "name": "Conservatori Superior de Música del Liceu",
                "address": "Carrer Nou de la Rambla, 88, 08001 Barcelona",
                "simple": "conservatori liceu",
                "image": "liceu.jpg",
                "center": [
                    41.37628744069495,
                    2.171033399576811
                ]
            },
            stories: [
                {
                    id: 17,
                    userId: 2,
                    username: 'h5twh6w4',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'blue',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 18,
                    userId: 2,
                    username: 'wrtthtyt5h56wth',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'purple',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 10,
                "type": "school",
                "associateName": "Universitat Politècnica de Catalunya",
                "parentName": "Euncet University Business School",
                "name": "Euncet Campus Terrassa",
                "simple": "euncet terrassa",
                "address": "Camí del Mas Rubial, 1, 08225 Terrassa, Barcelona",
                "image": "euncet.jpg",
                "center": [
                    41.59987394767506,
                    2.0153469977335408
                ]
            },
            stories: [
                {
                    id: 19,
                    userId: 2,
                    username: 'wth5twht2h',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 20,
                    userId: 2,
                    username: 'rh5yhq4g4qg',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'gray',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 49,
                "associateName": "Universitat Pompeu Fabra",
                "parentName": "TecnoCampus Mataró",
                "name": "Fundació TecnoCampus Mataró-Maresme",
                "type": "campus",
                "simple": "tecnocampus",
                "address": "Passatge d'Adolf Comeron, 10, 08302 Mataró, Barcelona",
                "image": "tecnocampus.png",
                "center": [
                    41.527334949198426,
                    2.433311226956721
                ]
            },
            stories: [
                {
                    id: 21,
                    userId: 2,
                    username: 'w4htyhtwg4g',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'gray',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 22,
                    userId: 2,
                    username: '4htwgrwgw',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 65,
                "parentName": "Universitat de Girona",
                "acronym": "UdG",
                "type": "campus",
                "name": "Campus Barri Vell",
                "address": "17004 Girona",
                "simple": "udg barri vell",
                "image": "udg.jpg",
                "center": [
                    41.98602709472981,
                    2.827869764855122
                ]
            },
            stories: [
                {
                    id: 23,
                    userId: 2,
                    username: 'aegvgagrtbt',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'brown',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 24,
                    userId: 2,
                    username: 'eg3g5g4wf43f',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'blue',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 50,
                "parentName": "Universitat de Lleida",
                "acronym": "UDL",
                "type": "campus",
                "name": "Campus de Cappont",
                "address": "C/ de Jaume II, 71, 25001 Lleida",
                "simple": "udl cappont",
                "image": "udl.png",
                "center": [
                    41.60739965767477,
                    0.6241617568764151
                ]
            },
            stories: [
                {
                    id: 25,
                    userId: 2,
                    username: 'ggrgtf3af3',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 26,
                    userId: 2,
                    username: 'awgrg5a3f',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'orange',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 77,
                "associateName": "Universitat Ramon Llull",
                "parentName": "Blanquerna",
                "type": "faculties",
                "name": "Facultat de Psicologia, Ciències de l'Educació i de l'Esport",
                "address": "Carrer del Císter, 34, 08022 Barcelona",
                "simple": "blanquerna psicologia",
                "image": "blanquerna.jpg",
                "center": [
                    41.41158152154075,
                    2.1328822130708005
                ]
            },
            stories: [
                {
                    id: 27,
                    userId: 2,
                    username: 'wfegga',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'red',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 28,
                    userId: 2,
                    username: 'fe3g4vqaf',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'green',
                    createdAt: Date.now() - 80000

                }
            ]
        },
        {
            university: {
                "id": 83,
                "parentName": "ESADE",
                "associateName": "Universitat Ramon Llull",
                "type": "campus",
                "name": "Campus Barcelona - Sant Cugat",
                "address": "Avinguda de la Torre Blanca, 59, 08172 Sant Cugat del Vallès, Barcelona",
                "simple": "esade sant cugat",
                "image": "esade.jpg",
                "center": [
                    41.46730832952267,
                    2.09138082471557
                ]
            },
            stories: [
                {
                    id: 29,
                    userId: 2,
                    username: 'afwawergaae',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'purple',
                    createdAt: Date.now() - 80000

                },
                {
                    id: 30,
                    userId: 2,
                    username: 'fweEDEVERG',
                    profileImage: 'https://picsum.photos/100/95',
                    body: 'eragerg4rqgg4g524g24 gregeragrg',
                    backgroundColor: 'green',
                    createdAt: Date.now() - 80000
                }
            ]
        }
    ]
