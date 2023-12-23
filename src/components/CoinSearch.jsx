// import React, { useState } from "react";

// import CoinItem from "./CoinItem";

// const CoinSearch = ({ coins }) => {
//   const [searchText, setSearchText] = useState("");
//   return (
//     <div className="rounded-div my-4">
//       <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
//         <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
//         <form>
//           <input
//             className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
//             onChange={(e) => setSearchText(e.target.value)}
//             type="text"
//             placeholder="Search a Coin"
//           />
//         </form>
//       </div>
//       <table className="w-full border-collapse text-center">
//         <thead>
//           <tr className="border-b">
//             <th></th>
//             <th className="px-4">#</th>
//             <th className="text-left">Coin</th>
//             <th></th>
//             <th>Price</th>
//             <th>24h</th>
//             <th className="hidden md:table-cell">24h Volume</th>
//             <th className="hidden sm:table-cell">Mkt</th>
//             <th>Last 7 Days</th>
//           </tr>
//         </thead>
//         <tbody>
//           {coins
//             .filter((value) => {
//               if (searchText === "") {
//                 return value;
//               } else if (
//                 value.name.toLowerCase().includes(searchText.toLowerCase())
//               ) {
//                 return value;
//               }
//             })
//             .map((coin) => (
//               <CoinItem key={coin.id} coin={coin} />
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CoinSearch;

// import React, { useState } from "react";
// import CoinItem from "./CoinItem";

// const ITEMS_PER_PAGE = 10;

// const CoinSearch = ({ coins }) => {
//   const [searchText, setSearchText] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the index range for the current page
//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentCoins = coins.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="rounded-div my-4">
//       {/* ... (same as before) */}
//       <table className="w-full border-collapse text-center">
//         <thead>{/* ... (same as before) */}</thead>
//         <tbody>
//           {currentCoins
//             .filter((value) => {
//               if (searchText === "") {
//                 return value;
//               } else if (
//                 value.name.toLowerCase().includes(searchText.toLowerCase())
//               ) {
//                 return value;
//               }
//             })
//             .map((coin) => (
//               <CoinItem key={coin.id} coin={coin} />
//             ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="flex flex-wrap justify-center mt-4">
//         {[...Array(Math.ceil(coins.length / ITEMS_PER_PAGE))].map(
//           (item, index) => (
//             <button
//               key={index}
//               onClick={() => paginate(index + 1)}
//               className={`mx-3 my-1 px-4 py-2 border rounded-full shadow-md transform scale-105 transition-all ${
//                 currentPage === index + 1
//                   ? "bg-blue-500 text-white border-blue-500"
//                   : "bg-white text-blue-500 border-gray-300 hover:bg-blue-200 hover:text-white"
//               } focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 active:bg-blue-700`}
//             >
//               {index + 1}
//             </button>
//           )
//         )}
//       </div>
//     </div>
//   );
// };

// export default CoinSearch;

// import React, { useState } from "react";
// import CoinItem from "./CoinItem";

// const ITEMS_PER_PAGE = 10;

// const CoinSearch = ({ coins }) => {
//   const [searchText, setSearchText] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);

//   // Calculate the index range for the current page
//   const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
//   const currentCoins = coins.slice(indexOfFirstItem, indexOfLastItem);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="rounded-div my-4">
//       <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
//         <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
//         <form>
//           <input
//             className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
//             onChange={(e) => setSearchText(e.target.value)}
//             type="text"
//             placeholder="Search a Coin"
//           />
//         </form>
//       </div>
//       {/* ... (same as before) */}
//       <table className="w-full border-collapse text-center">
//         <thead>
//           {" "}
//           <tr className="border-b">
//             <th></th>
//             <th className="px-4">#</th>
//             <th className="text-left">Coin</th>
//             <th></th>
//             <th>Price</th>
//             <th>24h</th>
//             <th className="hidden md:table-cell">24h Volume</th>
//             <th className="hidden sm:table-cell">Mkt</th>
//             <th>Last 7 Days</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentCoins
//             .filter((value) => {
//               if (searchText === "") {
//                 return value;
//               } else if (
//                 value.name.toLowerCase().includes(searchText.toLowerCase())
//               ) {
//                 return value;
//               }
//             })
//             .map((coin) => (
//               <CoinItem key={coin.id} coin={coin} />
//             ))}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <nav className="flex justify-center items-center mt-1" >
//         <ul className="flex items-center -space-x-px h-8 text-sm">
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//             >
//               <span className="sr-only">Previous</span>
//               <svg
//                 className="w-2.5 h-2.5 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//             </a>
//           </li>
//           {[...Array(Math.ceil(coins.length / ITEMS_PER_PAGE))].map(
//             (item, index) => (
//               <li key={index}>
//                 <a
//                   href="#"
//                   className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
//                     currentPage === index + 1
//                       ? "z-10 bg-blue-50 text-blue-600 border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
//                       : ""
//                   }`}
//                   onClick={() => paginate(index + 1)}
//                 >
//                   {index + 1}
//                 </a>
//               </li>
//             )
//           )}
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
//               onClick={() => paginate(currentPage + 1)}
//               disabled={
//                 currentPage === Math.ceil(coins.length / ITEMS_PER_PAGE)
//               }
//             >
//               <span className="sr-only">Next</span>
//               <svg
//                 className="w-2.5 h-2.5 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default CoinSearch;

import React, { useState } from "react";
import CoinItem from "./CoinItem";

const ITEMS_PER_PAGE = 10;

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCoins = coins.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="rounded-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto</h1>
        <form>
          <input
            className="w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl"
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search a Coin"
          />
        </form>
      </div>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th>Tag</th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {currentCoins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 me-3 text-sm  mb-3 font-medium text-white bg-blue-300 border border-blue-300 rounded-lg hover:bg-blue-600 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg
            className="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </a>
        <a
          href="#"
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium mb-3 text-white bg-blue-500 border border-blue-300 rounded-lg hover:bg-blue-600 hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
            currentPage === Math.ceil(coins.length / ITEMS_PER_PAGE)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(coins.length / ITEMS_PER_PAGE)}
        >
          Next
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CoinSearch;
