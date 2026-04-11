import React, { useState } from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";

const NewsCard = ({ imgSrc, title }) => (
  <div className='w-full shadow-lg border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1'>
    <div className='relative'>   
      <img className='w-full h-48 object-cover' src={imgSrc} alt={title} />
      <div className='absolute bottom-0 left-0 right-0'>
        <img className='w-full' src="https://www.alpha.net.bd/Content/img/demohome/newspattern.png" alt="" />
      </div>
    </div>
    <div className='bg-white p-6'>
      <p className='text-sm font-bold text-gray-800 mb-4 line-clamp-2'>{title}</p>
      <div className='w-20 h-0.5 bg-universe_secondary mb-4'></div>
      <div className='flex items-center text-universe_primary'>
        <span className='font-semibold'>Read More</span>
        <MdOutlineDoubleArrow className='text-xl ml-1' />
      </div>
    </div>
  </div>
);

const News = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const newsItems = [
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723643403/soft%20tech/News/nlyaiyf3b4zdai1mmizu.jpg",
      title: "অনুষ্ঠিত হলো  ওয়েব হোস্টিং সামিট ২০২৪",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723643403/soft%20tech/News/nlyaiyf3b4zdai1mmizu.jpg",
      title: "অনুষ্ঠিত হলো  ওয়েব হোস্টিং সামিট ২০২৪",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723643403/soft%20tech/News/nlyaiyf3b4zdai1mmizu.jpg",
      title: "অনুষ্ঠিত হলো  ওয়েব হোস্টিং সামিট ২০২৪",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723655464/soft%20tech/News/mtj7pgsotchbn9c579d9.jpg",
      title: "নতুন প্রযুক্তি ও মানসম্মত সেবা প্রদানে আলফা নেট এর নতুন আঙ্গিকে ঢাকা..",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723655464/soft%20tech/News/mtj7pgsotchbn9c579d9.jpg",
      title: "নতুন প্রযুক্তি ও মানসম্মত সেবা প্রদানে আলফা নেট এর নতুন আঙ্গিকে ঢাকা..",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723655464/soft%20tech/News/mtj7pgsotchbn9c579d9.jpg",
      title: "নতুন প্রযুক্তি ও মানসম্মত সেবা প্রদানে আলফা নেট এর নতুন আঙ্গিকে ঢাকা..",
    },
    {
      imgSrc: "https://res.cloudinary.com/dgamcpb88/image/upload/v1723655464/soft%20tech/News/mtj7pgsotchbn9c579d9.jpg",
      title: "নতুন প্রযুক্তি ও মানসম্মত সেবা প্রদানে আলফা নেট এর নতুন আঙ্গিকে ঢাকা..",
    },
    // Add all the news items here...
  ];

  const showMoreItems = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 4, newsItems.length));
  };

  const allItemsVisible = visibleCount >= newsItems.length;

  return (
    <div className='container mx-auto px-4 my-20'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-6 mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold uppercase'>
          Latest <span className='text-universe_secondary border-b-2 border-universe_secondary'>News</span>
        </h1>
      </div>
      
      <p className='mb-10 text-gray-700 text-xl'>
        Universe Soft Tech has organized and attended lots of IT events worldwide. Here are a few highlights:
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {newsItems.slice(0, visibleCount).map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
        {/* {newsItems.slice(0, visibleCount).map((item, index) => (
             <NewsCard key={index} {...item} />
            ))} */}
      </div>

      {!allItemsVisible && (
        <div className='mt-10 text-center'>
          <button 
            onClick={showMoreItems}
            className='px-6 py-2 bg-universe_primary text-white rounded-full hover:bg-bg_btn_hover transition-colors duration-300'
          >
            See More News
          </button>
        </div>
      )}
    </div>
  );
};

export default News;