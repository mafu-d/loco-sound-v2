export default {
  movements: [
    {
      id: 'idle',
      file: '',
      startTime: 0,
      endTime: 30,
      loopable: false,
      end: 'idle',
    },
    {
      id: 'start',
      file: '',
      startTime: 30,
      endTime: 60,
      loopable: false,
      end: 'cruise',
    },
    {
      id: 'cruise',
      file: '',
      startTime: 60,
      endTime: 90,
      loopable: true,
      end: 'stop',
    },
    {
      id: 'stop',
      file: '',
      startTime: 90,
      endTime: 120,
      loopable: false,
      end: 'idle',
    },
    {
      id: 'move',
      file: '',
      startTime: 120,
      endTime: 150,
      loopable: false,
      end: 'idle',
    },
  ],

  sounds: [
    {
      id: 'whistle',
      file: '',
      startTime: 0,
      endTime: 10,
      loopable: false,
      end: null,
    },
    {
      id: 'blower',
      file: '',
      startTime: 0,
      endTime: 20,
      loopable: false,
      end: null,
    }
  ]
}