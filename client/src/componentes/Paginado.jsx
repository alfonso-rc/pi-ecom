import React from "react"

export default function Paginado({ articlePerPage, allArticle, paginado }) {
    const pageNumber = [];
  
    for (let i = 1; i <= Math.ceil(allArticle / articlePerPage); i++) {
      pageNumber.push(i);
    }
    return (
      <nav>
        <ul>
          {pageNumber &&
            pageNumber.map((number) => (
              <li key={number}>
                <a onClick={() => paginado(number)}>{number}</a>
              </li>
            ))}
        </ul>
      </nav>
    );
  }