import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  ),
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'> & { isActive?: boolean }>(
  ({ className, isActive, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('rounded-sm border bg-white text-body1 text-text-primary', className, {
        'border-primary bg-blue-50': isActive,
      })}
      {...props}
    />
  ),
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = 'icon',
  href,
  ...props
}: PaginationLinkProps & { disabled?: boolean }) => (
  <Link
    href={href ?? '#'}
    passHref
    legacyBehavior>
    <a
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size,
          className: 'h-8 w-8 text-body4 desktop:h-10 desktop:w-10 desktop:text-body1',
        }),
        { 'pointer-events-none opacity-50': disabled },
        className,
      )}
      {...props}
    />
  </Link>
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn('p-0 desktop:p-3', className)}
    {...props}>
    <ChevronLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';

const PaginationFirst = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to First page"
    size="default"
    className={cn('p-0 desktop:p-3', className)}
    {...props}>
    <ChevronsLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationFirst.displayName = 'PaginationFirst';

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn('p-0 desktop:p-3', className)}
    {...props}>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationLast = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to Last page"
    size="default"
    className={cn('p-0 desktop:p-3', className)}
    {...props}>
    <ChevronsRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationLast.displayName = 'PaginationLast';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex items-center justify-center p-3', className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationFirst,
  PaginationLast,
};
