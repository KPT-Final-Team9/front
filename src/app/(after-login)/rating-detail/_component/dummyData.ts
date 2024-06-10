import { RatingDetail } from './RatingDetailDataTable';

export enum RatingCategory {
  FACILITY = '시설 평가',
  MANAGEMENT = '관리 평가',
  COMPLAINT = '민원 평가',
}

export const dummyData: RatingDetail[] = [
  // Building A (3 rooms)
  {
    id: '1',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A-1',
    room: '101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '2',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A-1',
    room: '102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '3',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A-1',
    room: '103',
    isBookmark: false,
    ratingDate: new Date('2023-03-05'),
  },
  // Building B (3 rooms)
  {
    id: '4',
    category: RatingCategory.FACILITY,
    score: 75,
    content: 'The parking lot is spacious but needs better lighting.',
    building: 'Building B-1',
    room: '201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '5',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B-1',
    room: '202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '6',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B-1',
    room: '203',
    isBookmark: true,
    ratingDate: new Date('2023-06-30'),
  },
  // Building C (4 rooms)
  {
    id: '7',
    category: RatingCategory.FACILITY,
    score: 80,
    content: 'The swimming pool is clean and well-maintained.',
    building: 'Building C-1',
    room: '301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '8',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C-1',
    room: '302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '9',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C-1',
    room: '303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '10',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C-1',
    room: '304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
  {
    id: '11',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A-2',
    room: '1101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '12',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A-2',
    room: '1102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '13',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A-2',
    room: '1103',
    isBookmark: false,
    ratingDate: new Date('2023-03-05'),
  },
  // Building B (3 rooms)
  {
    id: '14',
    category: RatingCategory.FACILITY,
    score: 75,
    content: 'The parking lot is spacious but needs better lighting.',
    building: 'Building B-2',
    room: '1201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '15',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B-2',
    room: '1202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '16',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B-2',
    room: '1203',
    isBookmark: true,
    ratingDate: new Date('2023-06-30'),
  },
  // Building C (4 rooms)
  {
    id: '17',
    category: RatingCategory.FACILITY,
    score: 80,
    content: 'The swimming pool is clean and well-maintained.',
    building: 'Building C-2',
    room: '1301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '18',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C-2',
    room: '1302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '19',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C-2',
    room: '1303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '20',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C-2',
    room: '1304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
  {
    id: '21',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A-3',
    room: '101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '22',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A-3',
    room: '102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '23',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A-3',
    room: '103',
    isBookmark: false,
    ratingDate: new Date('2023-03-05'),
  },
  // Building B (3 rooms)
  {
    id: '24',
    category: RatingCategory.FACILITY,
    score: 75,
    content: 'The parking lot is spacious but needs better lighting.',
    building: 'Building B-3',
    room: '201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '25',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B-3',
    room: '202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '26',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B-3',
    room: '203',
    isBookmark: true,
    ratingDate: new Date('2023-06-30'),
  },
  // Building C (4 rooms)
  {
    id: '27',
    category: RatingCategory.FACILITY,
    score: 80,
    content: 'The swimming pool is clean and well-maintained.',
    building: 'Building C-3',
    room: '301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '28',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C-3',
    room: '302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '29',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C-3',
    room: '303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '30',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C-3',
    room: '304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
  {
    id: '31',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A-4',
    room: '101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '32',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A-4',
    room: '102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '33',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A-4',
    room: '103',
    isBookmark: false,
    ratingDate: new Date('2023-03-05'),
  },
  // Building B (3 rooms)
  {
    id: '34',
    category: RatingCategory.FACILITY,
    score: 75,
    content: 'The parking lot is spacious but needs better lighting.',
    building: 'Building B-4',
    room: '201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '35',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B-4',
    room: '202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '36',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B-4',
    room: '203',
    isBookmark: true,
    ratingDate: new Date('2023-06-30'),
  },
  // Building C (4 rooms)
  {
    id: '37',
    category: RatingCategory.FACILITY,
    score: 80,
    content: 'The swimming pool is clean and well-maintained.',
    building: 'Building C-4',
    room: '301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '38',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C-4',
    room: '302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '39',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C-4',
    room: '303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '40',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C-4',
    room: '304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
  {
    id: '41',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A-5',
    room: '101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '42',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A-5',
    room: '102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '43',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A-5',
    room: '103',
    isBookmark: false,
    ratingDate: new Date('2023-03-05'),
  },
  // Building B (3 rooms)
  {
    id: '44',
    category: RatingCategory.FACILITY,
    score: 75,
    content: 'The parking lot is spacious but needs better lighting.',
    building: 'Building B-5',
    room: '201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '45',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B-5',
    room: '202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '46',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B-5',
    room: '203',
    isBookmark: true,
    ratingDate: new Date('2023-06-30'),
  },
  // Building C (4 rooms)
  {
    id: '47',
    category: RatingCategory.FACILITY,
    score: 80,
    content: 'The swimming pool is clean and well-maintained.',
    building: 'Building C-5',
    room: '301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '48',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C-5',
    room: '302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '49',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C-5',
    room: '303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '50',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C-5',
    room: '304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
];
