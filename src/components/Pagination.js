import React from "react";
import "./Pagination.css";
import {Link} from "react-router-dom";

function Pagination({postsPerPage, totalPosts, paginate}){

    const pageNumbers = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <div>
            <ul className="number-list">
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <Link onClick={() => paginate(number)} to="/">
                                {number}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;