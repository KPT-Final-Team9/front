'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

export const columns: ColumnDef<RatingDetail, unknown>[] = [
  {
    accessorKey: 'category',
    header: '유형',
    cell: ({ row }) => <div>{row.getValue('category')}</div>,
  },
  {
    accessorKey: 'score',
    header: '점수',
    cell: ({ row }) => <div>{row.getValue('score')}점</div>,
  },
  {
    accessorKey: 'content',
    header: '평가 내용',
    cell: ({ row }) => <div>{row.getValue('content')}</div>,
  },
  {
    accessorKey: 'building',
    header: '건물',
    cell: ({ row }) => <div>{row.getValue('building')}</div>,
  },
  {
    accessorKey: 'room',
    header: '호실',
    cell: ({ row }) => <div>{row.getValue('room')}</div>,
  },
  {
    accessorKey: 'isBookmark',
    header: '북마크',
    cell: ({ row }) => <div>{row.getValue('isBookmark')}</div>,
  },
  {
    accessorKey: 'ratingDate',
    header: '평가 날짜',
    cell: ({ row }) => <div>날짜</div>,
  },
];

export default function RatingDetailDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
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
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
          selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
