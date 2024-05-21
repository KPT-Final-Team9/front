import { http, HttpResponse } from 'msw';

const CalendarData = [
  {
    id: 0,
    date: '2024-03-01',
    memo: [
      {
        id: 0,
        text: '식사',
      },
      {
        id: 1,
        text: '운동',
      },
    ],
  },
  {
    id: 1,
    date: '2024-03-02',
    memo: [
      {
        id: 0,
        text: '연차',
      },
      {
        id: 1,
        text: '회의',
      },
    ],
  },
  {
    id: 2,
    date: '2024-03-03',
    reservation: 0,
    canceled: 0,
    noShow: 0,
    memo: [],
  },
  {
    id: 3,
    date: '2024-03-04',
    memo: [
      {
        id: 0,
        text: '공부',
      },
      {
        id: 1,
        text: '휴식',
      },
    ],
  },
  {
    id: 4,
    date: '2024-03-05',
    memo: [],
  },
  {
    id: 30,
    date: '2024-03-31',
    memo: [
      {
        id: 0,
        text: '파티',
      },
      {
        id: 1,
        text: '운동',
      },
    ],
  },
];

export const handlers = [
  http.get('/api/calendar', ({}) => {
    return HttpResponse.json(CalendarData);
  }),

  http.get('/api/exam', ({}) => {
    return HttpResponse.json(CalendarData);
  }),

  http.get('https://example.com/api', ({}) => {
    return HttpResponse.json(CalendarData);
  }),
];
