'use client';

import { useState } from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  Row,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDateToYYYY_MM_DD } from '@/utils';
import { BookmarkIcon } from '@/asset/Icons';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BuildingRoomAvatar } from '@Atoms/avatar/BuildingRoomAvatar';
import { Button } from '@/components/ui/button';
import { LocalIcon } from '@icon/index';

enum RatingCategory {
  FACILITY = '시설 평가',
  MANAGEMENT = '관리 평가',
  COMPLAINT = '민원 평가',
}

// FIXME: 더미 데이터
const dummyData: RatingDetail[] = [
  // Building A (3 rooms)
  {
    id: '1',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A',
    room: '101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '2',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A',
    room: '102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '3',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A',
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
    building: 'Building B',
    room: '201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '5',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B',
    room: '202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '6',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B',
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
    building: 'Building C',
    room: '301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '8',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C',
    room: '302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '9',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C',
    room: '303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '10',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C',
    room: '304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
  {
    id: '11',
    category: RatingCategory.FACILITY,
    score: 85,
    content: 'The gym is well-equipped and clean.',
    building: 'Building A',
    room: '1101',
    isBookmark: true,
    ratingDate: new Date('2023-01-15'),
  },
  {
    id: '12',
    category: RatingCategory.MANAGEMENT,
    score: 90,
    content: 'Management is very responsive and helpful.',
    building: 'Building A',
    room: '1102',
    isBookmark: false,
    ratingDate: new Date('2023-02-10'),
  },
  {
    id: '13',
    category: RatingCategory.COMPLAINT,
    score: 40,
    content: 'There have been repeated issues with water supply.',
    building: 'Building A',
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
    building: 'Building B',
    room: '1201',
    isBookmark: true,
    ratingDate: new Date('2023-04-20'),
  },
  {
    id: '15',
    category: RatingCategory.MANAGEMENT,
    score: 95,
    content: 'The new manager is doing an excellent job.',
    building: 'Building B',
    room: '1202',
    isBookmark: false,
    ratingDate: new Date('2023-05-25'),
  },
  {
    id: '16',
    category: RatingCategory.COMPLAINT,
    score: 30,
    content: 'Noise complaints are not being addressed.',
    building: 'Building B',
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
    building: 'Building C',
    room: '1301',
    isBookmark: false,
    ratingDate: new Date('2023-07-10'),
  },
  {
    id: '18',
    category: RatingCategory.MANAGEMENT,
    score: 85,
    content: 'Maintenance requests are handled quickly.',
    building: 'Building C',
    room: '1302',
    isBookmark: true,
    ratingDate: new Date('2023-08-15'),
  },
  {
    id: '19',
    category: RatingCategory.COMPLAINT,
    score: 20,
    content: 'There are pest control issues in the basement.',
    building: 'Building C',
    room: '1303',
    isBookmark: false,
    ratingDate: new Date('2023-09-05'),
  },
  {
    id: '20',
    category: RatingCategory.FACILITY,
    score: 50,
    content: 'The elevator often breaks down.',
    building: 'Building C',
    room: '1304',
    isBookmark: true,
    ratingDate: new Date('2023-10-10'),
  },
];

export type RatingDetail = {
  id: string;
  category: RatingCategory;
  score: number;
  content: string;
  building: string;
  room: string;
  isBookmark: boolean;
  ratingDate: Date;
};

enum RatingDetailTableAccessorKey {
  CATEGORY = 'category',
  SCORE = 'score',
  CONTENT = 'content',
  BUILDING = 'building',
  ROOM = 'room',
  IS_BOOKMARK = 'isBookmark',
  RATING_DATE = 'ratingDate',
}

export const columns: ColumnDef<RatingDetail, unknown>[] = [
  {
    accessorKey: RatingDetailTableAccessorKey.CATEGORY,
    header: () => <div className="pl-2.5 desktop:pl-5">유형</div>,
    cell: ({ row }) => <div className="pl-2.5 desktop:pl-5">{row.getValue(RatingDetailTableAccessorKey.CATEGORY)}</div>,
  },
  {
    accessorKey: RatingDetailTableAccessorKey.SCORE,
    header: () => <div>점수</div>,
    cell: ({ row }) => <div>{row.getValue(RatingDetailTableAccessorKey.SCORE)}점</div>,
  },
  {
    accessorKey: RatingDetailTableAccessorKey.CONTENT,
    header: () => <div>평가 내용</div>,
    cell: ({ row }) => <div>{row.getValue(RatingDetailTableAccessorKey.CONTENT)}</div>,
  },
  {
    accessorKey: RatingDetailTableAccessorKey.BUILDING,
    header: () => <div>건물</div>,
    cell: ({ row }) => <div>{row.getValue(RatingDetailTableAccessorKey.BUILDING)}</div>,
  },
  {
    accessorKey: RatingDetailTableAccessorKey.ROOM,
    header: () => <div>호실</div>,
    cell: ({ row }) => <div>{row.getValue(RatingDetailTableAccessorKey.ROOM)}</div>,
  },
  {
    accessorKey: RatingDetailTableAccessorKey.IS_BOOKMARK,
    header: () => <BookmarkIcon className="w-5" />,
    cell: ({ row }) => (
      <BookmarkIcon
        className="w-5 cursor-pointer hover:fill-text-primary active:scale-95"
        fill={row.getValue(RatingDetailTableAccessorKey.IS_BOOKMARK) ? 'text-text-primary' : 'none'}
      />
    ),
  },
  {
    accessorKey: RatingDetailTableAccessorKey.RATING_DATE,
    header: () => <div>평가 날짜</div>,
    cell: ({ row }) => <div>{formatDateToYYYY_MM_DD(row.getValue(RatingDetailTableAccessorKey.RATING_DATE))}</div>,
  },
];

const PAGE_ROW_LIMIT = 10; // 데이터 10개 씩 보여줌.

export default function RatingDetailDataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [selectedRow, setSelectedRow] = useState<Row<RatingDetail> | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(0); // 0부터 셈
  const pageNum = Math.round(dummyData.length / PAGE_ROW_LIMIT);

  const table = useReactTable({
    data: dummyData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleRowClick = (newSelectedRow: Row<RatingDetail>) => {
    setIsDialogOpen(true);
    setSelectedRow(newSelectedRow);
  };

  const handleFirstClick = () => {
    if (currentPage === 0) return;
    setCurrentPage(0);
  };

  const handlePreviousClick = () => {
    if (currentPage === 0) return;
    setCurrentPage(prev => prev - 1);
  };

  const handleLastClick = () => {
    if (currentPage === pageNum) return;
    setCurrentPage(pageNum);
  };

  const handleNextClick = () => {
    if (currentPage === pageNum) return;
    setCurrentPage(prev => prev + 1);
  };

  const handlePageButtonClick = (newPageNum: number) => {
    setCurrentPage(newPageNum);
  };

  return (
    <div className="w-full">
      <Dialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}>
        <DialogContent className="p-0">
          <DialogHeader className="h-20 justify-center px-10 py-6">
            <DialogTitle className="text-h4 text-text-primary">평가 내용 상세보기</DialogTitle>
          </DialogHeader>
          <div className="flex gap-3 border-b border-t border-stroke bg-blue-50 px-10 py-6">
            <BuildingRoomAvatar idx={0} />
            <div className="text-h3 text-primary">
              {selectedRow?.getValue(RatingDetailTableAccessorKey.BUILDING)}
              {selectedRow?.getValue(RatingDetailTableAccessorKey.ROOM)}
            </div>
            <Button
              variant="icon"
              className="p-1">
              <LocalIcon
                name="BookmarkIcon"
                width={24}
                height={24}
                fill={selectedRow?.getValue(RatingDetailTableAccessorKey.IS_BOOKMARK) ? 'black' : 'none'}
              />
            </Button>
          </div>
          <div className="px-10 pb-16 pt-6">
            <div className="mb-16 flex w-full flex-col items-center justify-center">
              <div className="mb-2 text-body2 text-text-secondary">평가점수</div>
              <div className="text-h1 text-text-primary">
                {selectedRow?.getValue(RatingDetailTableAccessorKey.SCORE)}점
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex">
                <div className="w-[140px] text-body1 text-text-secondary">유형</div>
                <div className="text-h4 text-text-primary">
                  {selectedRow?.getValue(RatingDetailTableAccessorKey.CATEGORY)}
                </div>
              </div>
              <div className="flex">
                <div className="w-[140px] text-body1 text-text-secondary">평가 날짜</div>
                <div className="text-h4 text-text-primary">
                  {formatDateToYYYY_MM_DD(selectedRow?.getValue(RatingDetailTableAccessorKey.RATING_DATE))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-[140px] text-body1 text-text-secondary">평가 내용</div>
                <div className="text-h4 text-text-primary">
                  {selectedRow?.getValue(RatingDetailTableAccessorKey.CONTENT)}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <div className="rounded-container border bg-white">
        <Table>
          <TableHeader className="h-10 text-text-secondary desktop:h-16">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      className="text-body3 desktop:text-h4">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow
                  onClick={() => handleRowClick(row)}
                  className="h-12 cursor-pointer text-text-primary desktop:h-16"
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell
                      className={cell.column.id === RatingDetailTableAccessorKey.SCORE ? 'text-body1' : 'text-body2'}
                      key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  조회된 평가 내용이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-center space-x-2 py-4">
        <div className="space-x-2">
          {pageNum > 0 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationFirst onClick={handleFirstClick} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationPrevious onClick={handlePreviousClick} />
                </PaginationItem>
                {pageNum - currentPage + 1 > 5 ? (
                  <>
                    <PaginationItem isActive>
                      <PaginationLink>{currentPage + 1}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={() => handlePageButtonClick(currentPage + 1)}>
                        {currentPage + 2}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink onClick={() => handlePageButtonClick(currentPage + 2)}>
                        {currentPage + 3}
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationItem>
                      <PaginationLink onClick={() => handlePageButtonClick(pageNum)}>{pageNum}</PaginationLink>
                    </PaginationItem>
                  </>
                ) : (
                  <>
                    {new Array(pageNum - currentPage + 1).fill(0).map((_, index) => (
                      <PaginationItem isActive={index === 0}>
                        <PaginationLink onClick={() => handlePageButtonClick(index + currentPage)}>
                          {index + currentPage + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </>
                )}
                <PaginationItem>
                  <PaginationNext onClick={handleNextClick} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLast onClick={handleLastClick} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </div>
  );
}
