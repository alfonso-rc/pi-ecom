import React from "react";

export default function Paginado({ articlePerPage, allArticle, paginado }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(allArticle / articlePerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="btn-group grid grid-cols-3 gap-4">
      <nav>
        {pageNumber &&
          pageNumber.map((number) => (
            <div className="flex flex-nowrap">
            <ul  key={number}>
              <button className="btn" onClick={() => paginado(number)}>
                {number}
              </button>
            </ul>
            </div>
          ))}
      </nav>
    </div>
  );
}
