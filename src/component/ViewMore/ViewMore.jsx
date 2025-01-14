import React from 'react';
import './ViewMore.css';
import { MdNavigateNext } from 'react-icons/md';
function ViewMore() {
    return (
        <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="view-more col-xs-12 text-center d-flex align-items-center">
                <span> Xem Thêm Tours</span>
                <span className="next mt-1">
                    <MdNavigateNext />
                </span>
            </button>
        </div>
    );
}

export default ViewMore;
