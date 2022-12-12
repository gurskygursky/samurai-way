import React from 'react';
import {useState} from 'react';

type PropsType = {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    selectPage: (pageNumber: number) => void;
}

export const Paginator: React.FC<PropsType> = (props) => {

    const nPages = Math.ceil(props.totalCount / props.pageSize);
    const pagesCount = [];

    for (let i = 1; i <= nPages; i++) {
        pagesCount.push(i);
    }

    const [currentPageOutput, setCurrentPageOutput] = useState(1);
    const countPagesOutputInLine = 10;
    const countPagesOutput = Math.ceil(props.totalCount / countPagesOutputInLine);

    const prevCountPageOutput = (currentPageOutput - 1) * countPagesOutputInLine + 1;
    const nextCountPageOutput = currentPageOutput * countPagesOutputInLine;



    const nextPage = () => {
        if( currentPageOutput > currentPageOutput)
            setCurrentPageOutput(props.currentPage + 1)
        console.log(props.currentPage)

    }
    const prevPage = () => {
        if(currentPageOutput > 1)
            setCurrentPageOutput(props.currentPage - 1)
        console.log(props.currentPage)
    }

    return (
        <div>
            <button onClick={prevPage}>Previous</button>
            {/*{pagesCount.map((pageNumber: number, index) => <button key={index}>{pageNumber}</button>)}*/}
            {
                pagesCount.filter(pageNumber => pageNumber >= prevCountPageOutput && pageNumber <= nextCountPageOutput)
                .map((pageNumber: number, index) => <button key={index} onClick={() => console.log(pageNumber)}>{pageNumber}</button>)
            }
            <button onClick={nextPage}>Next</button>
        </div>
    )
}