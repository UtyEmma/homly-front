import ReactPaginate from "react-paginate"

export const Pagination = () => {

    const handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * perPage);
    }

    return (
        <ReactPaginate
        previousLabel={<li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
        </li>}
        nextLabel={<li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>}
        breakLabel={'...'}
        breakClassName={'page-item'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination rounded-active justify-content-center mb-0'}
        activeClassName={'active'}
      />
    )

}

{/* <div className="col-12">
    <nav className="pt-2 pt-lg-4">
        <ul className="pagination rounded-active justify-content-center mb-0">
        <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-left" /></a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active"><a className="page-link" href="#">2</a></li>
        <li className="page-item d-none d-sm-block"><a className="page-link" href="#">3</a></li>
        <li className="page-item">...</li>
        <li className="page-item"><a className="page-link" href="#">6</a></li>
        <li className="page-item"><a className="page-link" href="#"><i className="far fa-angle-double-right" /></a></li>
        </ul>
    </nav>
</div> */}