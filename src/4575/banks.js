export default [
  {
    id: '45xx-movement',
    file: 'src/4575/4575.mp3',
    adjustSpeed: true,
    sounds: [
      {
        id: '45xx-idle',
        name: 'Idle',
        startTime: 140,
        endTime: 174,
        loopable: false,
        next: '45xx-idle',
      },
      {
        id: '45xx-start',
        name: 'Start',
        startTime: 1,
        endTime: 55,
        loopable: false,
        next: '45xx-cruise',
      },
      {
        id: '45xx-cruise',
        name: 'Cruise',
        startTime: 55,
        endTime: 61,
        loopable: true,
        next: '45xx-tocoast',
      },
      {
        id: '45xx-tocoast',
        name: 'To Coast',
        startTime: 61,
        endTime: 69,
        loopable: false,
        next: '45xx-coast',
      },
      {
        id: '45xx-coast',
        name: 'Coast',
        startTime: 69,
        endTime: 99,
        loopable: true,
        next: '45xx-slowing'
      },
      {
        id: '45xx-slowing',
        name: 'Slowing',
        startTime: 99,
        endTime: 121,
        loopable: false,
        next: '45xx-stop',
      },
      {
        id: '45xx-stop',
        name: 'Stop',
        startTime: 121,
        endTime: 140,
        loopable: false,
        next: '45xx-idle',
      },
      {
        id: '45xx-move',
        name: 'Move',
        startTime: 174,
        endTime: 190,
        loopable: false,
        next: '45xx-idle',
      },
    ],
  },
  {
    id: '45xx-other',
    file: 'src/4575/4575-other.mp3',
    sounds: [
      {
        id: '45xx-whistle',
        name: 'Whistle 1',
        startTime: 0,
        endTime: 1,
        loopable: false,
      },
      {
        id: '45xx-whistle-2',
        name: 'Whistle 2',
        startTime: 3,
        endTime: 4,
        loopable: false,
      },
    ]
  },
]
