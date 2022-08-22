// import React from "react";

// export default function Paginado({ articlePerPage, allArticle, paginado }) {
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(allArticle / articlePerPage); i++) {
//     pageNumber.push(i);
//   }
//   return (
//     <div className="btn-group grid grid-cols-3 gap-4">
//       <nav>
//         {pageNumber &&
//           pageNumber.map((number) => (
//             <div className="flex flex-nowrap">
//             <ul  key={number}>
//               <button className="bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium" onClick={() => paginado(number)}>
//                 {number}
//               </button>
//             </ul>
//             </div>
//           ))}
//       </nav>
//     </div>
//   );
// }
import React from "react";

export default function Pagination({
  articlePerPage,
  allArticle,
  paginado,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allArticle / articlePerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-2 flex justify-center' >
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((number) => (
              <a
                onClick={() => {
                  paginado(number);
                }}
                href='#'
                className={
                  currentPage === number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
