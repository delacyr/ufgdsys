import { Box, Text, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountofRegister: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter((page) => page > 0);
}

export function Pagination( {
  totalCountofRegister,
  registerPerPage = 10,
  currentPage = 3,
  onPageChange
} : PaginationProps ) {
  const lastPage = Math.floor(totalCountofRegister / registerPerPage);
  
  const previousPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : [];

  const nextPages = currentPage < lastPage 
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : [];
  
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">

        {currentPage > siblingsCount + 1 && (
          <>
          <PaginationItem onPageChange={onPageChange} number={1} />
          {currentPage > siblingsCount + 2 && (
            (<Text color="gray.500" width="8" align="center">...</Text>)
          )}
          </>
        )}       

        {previousPages && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page} number={page} />
        ))}

        {currentPage + siblingsCount < lastPage && (
          <>
          {currentPage + siblingsCount + 1 < lastPage && (
            (<Text color="gray.500" width="8" align="center">...</Text>)
            )}
          <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        )} 

      </Stack>
    </Stack>
  );
}