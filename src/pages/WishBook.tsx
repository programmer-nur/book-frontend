// const WishBook = ({book}) => {
//     const {thumbnail,genre,author,title,publicationDate}=book.wishlist
//   return (
//     <div
//     className="flex flex-col rounded-lg p-1 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
//     <img
//       className="h-64 w-full rounded-t-lg object-cover  md:w-48 md:rounded-none md:rounded-l-lg"
//       src={thumbnail}
//       alt="" />
//     <div className="flex flex-col justify-start p-6">
//         <span className="text-sm text-black opacity-50">{genre}</span>
//       <h5
//         className="mb-2 text-lg font-medium text-neutral-800 ">
//         {title}
//       </h5>
//       <p className="mb-4 text-base text-neutral-600 ">
//        Author: {author}
//       </p>
//       <p className="text-xs text-neutral-500 ">
//        {publicationDate}
//       </p>
//     </div>
//   </div>
//   )
// }
// export default WishBook