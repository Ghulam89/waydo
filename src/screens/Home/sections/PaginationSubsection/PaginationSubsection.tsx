import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";

export const PaginationSubsection = (): JSX.Element => {
  const pageNumbers = [
    { number: "1", isActive: true },
    { number: "2", isActive: false },
    { number: "3", isActive: false },
    { number: "8", isActive: false },
    { number: "9", isActive: false },
    { number: "10", isActive: false },
  ];

  return (
    <nav className="flex w-full items-center justify-between pt-5 pb-0 px-0 border-t border-solid border-[#eaecf0]">
      <Pagination>
        <PaginationContent className="flex w-full items-center justify-between">
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="inline-flex gap-2 items-center justify-center text-gray-500 font-medium text-sm tracking-[0] leading-5 [font-family:'Mona_Sans',Helvetica] h-auto"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              Previous
            </PaginationPrevious>
          </PaginationItem>

          <div className="inline-flex items-start gap-0.5">
            {pageNumbers.map((page, index) => (
              <React.Fragment key={`page-${page.number}`}>
                {index === 3 && (
                  <PaginationItem>
                    <PaginationEllipsis className="w-10 h-10 rounded-lg flex items-center justify-center p-3 text-gray-500 [font-family:'Mona_Sans',Helvetica] font-medium text-sm text-center tracking-[0] leading-5" />
                  </PaginationItem>
                )}
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive={page.isActive}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center p-3 [font-family:'Mona_Sans',Helvetica] font-medium text-sm text-center tracking-[0] leading-5 whitespace-nowrap ${
                      page.isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {page.number}
                  </PaginationLink>
                </PaginationItem>
              </React.Fragment>
            ))}
          </div>

          <PaginationItem>
            <PaginationNext
              href="#"
              className="inline-flex gap-2 items-center justify-center text-gray-500 font-medium text-sm tracking-[0] leading-5 [font-family:'Mona_Sans',Helvetica] h-auto"
            >
              Next
              <ChevronRightIcon className="w-5 h-5" />
            </PaginationNext>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </nav>
  );
};
