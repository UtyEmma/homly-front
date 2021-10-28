import React, { useState, useEffect } from "react";
import ListingGrid from "./listing-grid";
import { useDispatch } from "react-redux";
import ListingList from "./listing-list";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import {
  ShowAllListings,
  showPaginationListing,
} from "providers/redux/_actions/listing/listing-actions";

export default function ListingContainer({
  listings,
  pagination,
  setParams,
  params,
  token,
  status,
}) {
  const dispatch = useDispatch();
  const [grid, setGrid] = useState(true);
  const { current_page, total, per_page, from, to } = pagination;
  const nextPageNumber = current_page + 1;
  // console.log("pagination", pagination);


  const toggleGrid = () => {
    if (!grid) {
      setGrid(true);
    }
  };

  const toggleList = () => {
    if (grid) {
      setGrid(false);
    }
  };

  const sort = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row align-items-sm-center mb-6">
        <div className="col-md-6">
          <h2 className="fs-15 text-dark mb-0">
            We found{" "}
            <span className="text-primary">
              {total > 0 ? total : 0}
            </span>{" "}
            properties available for you
          </h2>
        </div>
        <div className="col-md-6 mt-6 mt-md-0">
          <div className="d-flex justify-content-md-end align-items-center">
            <div className="input-group border rounded input-group-lg w-auto bg-white">
              <label
                className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                htmlFor="inputGroupSelect01"
              >
                <i className="fas fa-align-left fs-16 pr-2" />
                Sortby:
              </label>
              <select
                onChange={sort}
                className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                id="inputGroupSelect01"
                name="sortby"
              >
                <option defaultValue="" value="">
                  Latest
                </option>
                <option value="minprice">Price (Low to High)</option>
                <option value="maxprice">Price (High to Low)</option>
              </select>
            </div>
            <div className="d-none d-md-flex">
              <button
                className={`btn fs-sm-18 px-1 py-0 text-dark ${
                  grid ? "opacity-2" : ""
                }`}
                onClick={toggleList}
              >
                <i className="fas fa-list" />
              </button>
              <button
                className={`btn fs-sm-18 px-1 py-0 text-dark ml-2 ${
                  !grid ? "opacity-2" : ""
                }`}
                onClick={toggleGrid}
              >
                <i className="fa fa-th-large" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {listings.map((listing, index) =>
          grid ? (
            <ListingGrid status={status} listing={listing} key={index} />
          ) : (
            <ListingList status={status} listing={listing} key={index} />
          )
        )}
      </div>
      <nav className="pt-6">
        <ul className="pagination rounded-active justify-content-center mb-0">
          <Pagination
            activePage={current_page}
            itemsCountPerPage={per_page}
            totalItemsCount={total}
            pageRangeDisplayed={6}
            onChange={(nextPageNumber)=>{dispatch(showPaginationListing(token, params, nextPageNumber))}}
            itemClass="page-item"
            linkClass="page-link"
            firstPageText={<i className="far fa-angle-double-left" />}
            lastPageText={<i className="far fa-angle-double-right" />}
          />
        </ul>
      </nav>
                    <div className="text-center mt-2">{from}-{to} of {total} Results</div>

      {/* <nav className="pt-6">
        <ul className="pagination rounded-active justify-content-center mb-0">
          <li className="page-item">
            <Link className="page-link" href="#">
              <i className="far fa-angle-double-left" />
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" href="#">
              {current_page}
            </Link>
          </li>
          <li className="page-item d-none d-sm-block">
            <Link className="page-link" href="#">
              3
            </Link>
          </li>
          <li className="page-item">...</li>
          <li className="page-item">
            <Link className="page-link" href="#">
              6
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" href="#">
              <i className="far fa-angle-double-right" />
            </Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
}
