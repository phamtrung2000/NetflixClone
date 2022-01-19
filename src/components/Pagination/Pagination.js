import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios'
import './Pagination.css'
import { useLocation } from 'react-router-dom';
function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item.id}</h3>
            </div>
          ))}
      </>
    );
  }
const Pagination = ({num, setNum,setMovieList,setLoading}) => {
    const location=useLocation();
    // so phan tu num =20 phim
    const [currentItems, setCurrentItems] = useState(null);
    const [prev, setPrev] = useState(false)
    const [pageNumber, setPage] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const pageCount = Math.ceil(num / 6)
    var count = 0
    useEffect(()=>{
        if(pageNumber >=1)
        {
            if(prev == false)
            {
                setPrev(true)
            }
        }
        else
        {
            setPrev(false)
        }
    })
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 6;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=070460ee0b557df99bd8fd941d183e23')
        .then(function(response){
            setMovieList(response.data.results.slice(itemOffset,endOffset));
        })
        .catch(function(error){
            console.log(error)
        })
      }, [itemOffset]);
    const changePage = ({selected}) =>{
        const newOffset = (selected * 6) % 20;
        console.log(
            `User requested page number ${selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
        setPage(selected);
        // Load();
    }
    useEffect(()=>{
        setItemOffset(0);
        setPage(0);
    },[location])
    return (
        <div className="pagination">
            <div className="pagination__top">
                {
                    !prev?
                    <ReactPaginate 
                    previousLabel= {""}
                    nextLabel ={">"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttns"}
                    nextLinkClassName={"nextBttns"}
                    disabledClassName={"paginationDis"}
                    activeClassName={"activePage"}
                    />:
                    <ReactPaginate 
                previousLabel= {"<"}
                nextLabel ={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttns"}
                disabledClassName={"paginationDis"}
                activeClassName={"activePage"}
                />
}
            </div>
            <br/>
            <div className="pagination__bottom">
                <input type="text" placeholder="Nhập số trang"></input>
                <button >Di chuyển</button>
            </div>
        </div>
    );
}

export default Pagination;
