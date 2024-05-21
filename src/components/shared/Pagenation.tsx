import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ReactPaginate from "react-paginate";

interface PaginatedItemsProps<T> {
    itemsPerPage: number,
    items: T[];
    children: (currentItems: T[]) => React.ReactNode;
}

function PaginatedItems<T>({ itemsPerPage, items, children }: PaginatedItemsProps<T>) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState<number>(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="flex flex-col gap-4">
            {children?.(currentItems)}
            <ReactPaginate
                className="app-pagination"
                breakLabel="..."
                nextLabel={<GoArrowLeft />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<GoArrowRight />}
                renderOnZeroPageCount={null}
            />
        </div>
    );
}

export default PaginatedItems;