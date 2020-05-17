export default [
  {
    id: '4575-movement',
    file: 'src/4575/4575.mp3',
    sounds: [
      {
        id: '4575-idle',
        name: 'Idle',
        startTime: 140,
        endTime: 174,
        loopable: false,
        next: '4575-idle',
      },
      {
        id: '4575-start',
        name: 'Start',
        startTime: 1,
        endTime: 69,
        loopable: false,
        next: '4575-cruise',
      },
      {
        id: '4575-cruise',
        name: 'Cruise',
        startTime: 69,
        endTime: 99,
        loopable: true,
        next: '4575-stop',
      },
      {
        id: '4575-stop',
        name: 'Stop',
        startTime: 99,
        endTime: 140,
        loopable: false,
        next: '4575-idle',
      },
      {
        id: '4575-move',
        name: 'Move',
        startTime: 174,
        endTime: 190,
        loopable: false,
        next: '4575-idle',
      },
    ],
  },
  {
    id: '4575-other',
    file: 'src/4575/4575-other.mp3',
    sounds: [
      {
        id: '4575-whistle',
        name: 'Whistle 1',
        startTime: 0,
        endTime: 1,
        loopable: false,
      },
      {
        id: '4575-whistle-2',
        name: 'Whistle 2',
        startTime: 3,
        endTime: 4,
        loopable: false,
      },
    ]
  },
]
