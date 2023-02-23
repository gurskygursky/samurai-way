import React from 'react';
import {useState} from 'react';

type PropsType = {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    selectedPageNumber: (pageNumber: number) => void;
}

export const Paginator: React.FC<PropsType> = (props) => {

    const nPages = Math.ceil(props.totalCount / props.pageSize);
    const pagesCount = [];

    for (let i = 1; i <= nPages; i++) {
        pagesCount.push(i);
    }

    const [currentPageOutput, setCurrentPageOutput] = useState(1);

    const [onePage, setOnePage] = useState(props.currentPage);

    const countPagesOutputInLine = 10;
    const countPagesOutput = Math.ceil(props.totalCount / countPagesOutputInLine);

    const prevCountPageOutput = (currentPageOutput - 1) * countPagesOutputInLine + 1;
    const nextCountPageOutput = currentPageOutput * countPagesOutputInLine;

    const nextPages = () => {
        if (countPagesOutput > currentPageOutput)
            setCurrentPageOutput(currentPageOutput + 1);
    }
    const prevPages = () => {
        if (currentPageOutput > 1)
            setCurrentPageOutput(currentPageOutput - 1);
    }

    const nextPage = () => {
        setOnePage(onePage + 1);
        props.selectedPageNumber(onePage + 1);
    }
    const prevPage = () => {
        setOnePage(onePage - 1);
        props.selectedPageNumber(onePage - 1);
    }

    const selectPage = (pageNumber: number) => {
        props.selectedPageNumber(pageNumber);
        setOnePage(pageNumber);
        console.log(pageNumber)
    }

    return (
        <div>
            <button onClick={prevPage}>Previous</button>
            <button onClick={prevPages}>{'<<'}</button>
            {
                pagesCount.filter(pageNumber => pageNumber >= prevCountPageOutput && pageNumber <= nextCountPageOutput)
                .map((pageNumber: number, index) =>
                    <button style={onePage === pageNumber ? {color: 'red'} : {color: 'black'}}
                            key={index} onClick={() => selectPage(pageNumber)}>
                        {pageNumber}
                    </button>)
            }
            <button onClick={nextPages}>{'>>'}</button>
            <button onClick={nextPage}>Next</button>
        </div>
    );
}
