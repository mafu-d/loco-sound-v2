export default [
    {
        id: 'countryside',
        file: 'src/env/countryside.mp3',
        sounds: [
            {
                id: 'env-countryside',
                name: 'Countryside',
                startTime: 0,
                endTime: 600,
                loopable: false,
                next: 'env-countryside',
            },
        ]
    },
    {
        id: 'seaside',
        file: 'src/env/seaside.mp3',
        sounds: [
            {
                id: 'env-seaside',
                name: 'Seaside',
                startTime: 0,
                endTime: 117,
                loopable: false,
                next: 'env-seaside',
            },
        ]
    },
    {
        id: 'town',
        file: 'src/env/town.mp3',
        sounds: [
            {
                id: 'env-town',
                name: 'Town',
                startTime: 0,
                endTime: 117,
                loopable: false,
                next: 'env-town',
            },
        ]
    },
    {
        id: 'conversation',
        file: 'src/env/conversation.mp3',
        sounds: [
            {
                id: 'env-conversation',
                name: 'Conversation',
                startTime: 0,
                endTime: 117,
                loopable: false,
                next: 'env-conversation',
            },
        ]
    },
]