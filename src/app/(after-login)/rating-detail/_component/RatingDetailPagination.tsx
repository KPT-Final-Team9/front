import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationFirst,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationLast,
} from '@/components/ui/pagination';
import React from 'react';

const FIRST_PAGE_NUM = 0;

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
      <PaginationContent className="gap-3 desktop:gap-4">
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
              <PaginationLink onClick={() => handlePageButtonClick(currentPage + 1)}>{currentPage + 2}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageButtonClick(currentPage + 2)}>{currentPage + 3}</PaginationLink>
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
  );
}
