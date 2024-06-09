import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationLast,
} from '@/components/ui/pagination';
import React from 'react';
import { FIRST_PAGE_NUM } from '@/app/(after-login)/rating-detail/_component/RatingDetailDataTable';

// 함수를 분리할까 고민하였으나, 불필요한 읽기 흐름이 추가되어 하나의 함수로 만듬.
const getPaginationVarianceArr = (pageNum: number, currentPage: number): Array<number> => {
  // 1페이지 일 때
  if (pageNum === 1) return [0];

  // 2페이지 일 때
  if (pageNum < 3) {
    if (currentPage === pageNum) return [-1, 0];
    if (currentPage === FIRST_PAGE_NUM) return [0, 1];
  }

  // 3 ~ 4페이지 일 때
  if (pageNum < 5) {
    if (currentPage === pageNum) return [-2, -1, 0];
    if (currentPage === FIRST_PAGE_NUM) return [0, 1, 2];
    return [-1, 0, 1];
  }

  // 5페이지 이상일 때
  let paginationVarianceArr: Array<number>;
  switch (pageNum - currentPage) {
    case 0:
      paginationVarianceArr = [-4, -3, -2, -1, 0];
      break;
    case 1:
      paginationVarianceArr = [-3, -2, -1, 0, 1];
      break;
    default:
      paginationVarianceArr = [-2, -1, 0, 1, 2];
  }

  if (currentPage === FIRST_PAGE_NUM + 1) paginationVarianceArr = [-1, 0, 1, 2, 3];
  if (currentPage === FIRST_PAGE_NUM) paginationVarianceArr = [0, 1, 2, 3, 4];

  return paginationVarianceArr;
};

export default function RatingDetailPagination({
  pageNum = 0, // undefined가 오면 DEFAULT는 0
  currentPage = 0, // undefined가 오면 DEFAULT는 0
  setCurrentPage,
}: {
  pageNum?: number;
  currentPage?: number;
  setCurrentPage?: (newPage: number) => void;
}) {
  const handleFirstClick = () => {
    if (currentPage === FIRST_PAGE_NUM) return;
    setCurrentPage && setCurrentPage(FIRST_PAGE_NUM);
  };

  const handlePreviousClick = () => {
    if (currentPage === FIRST_PAGE_NUM) return;
    setCurrentPage && setCurrentPage(currentPage - 1);
  };

  const handleLastClick = () => {
    if (currentPage === pageNum) return;
    setCurrentPage && setCurrentPage(pageNum);
  };

  const handleNextClick = () => {
    if (currentPage === pageNum) return;
    setCurrentPage && setCurrentPage(currentPage + 1);
  };

  const handlePageButtonClick = (newPageNum: number) => {
    setCurrentPage && setCurrentPage(newPageNum);
  };

  return (
    <Pagination>
      <PaginationContent className="gap-2 desktop:gap-4">
        <PaginationItem>
          <PaginationFirst
            disabled={currentPage === FIRST_PAGE_NUM}
            onClick={handleFirstClick}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === FIRST_PAGE_NUM}
            onClick={handlePreviousClick}
          />
        </PaginationItem>
        {getPaginationVarianceArr(pageNum, currentPage).map(pageVariance => {
          const paginationNumber = pageVariance + currentPage;
          return (
            <PaginationItem
              key={'pagination-rating-detail-' + { paginationNumber }}
              isActive={paginationNumber === currentPage}
              onClick={() => handlePageButtonClick(paginationNumber)}>
              <PaginationLink>{paginationNumber}</PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            disabled={currentPage === pageNum}
            onClick={handleNextClick}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast
            disabled={currentPage === pageNum}
            onClick={handleLastClick}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
