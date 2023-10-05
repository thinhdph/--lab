import React, { useState } from 'react';

const ItemsPerPage = 5; // Số lượng mục trên mỗi trang

function PaginationApp({ data }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Xử lý sự kiện chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentItems.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}

      {/* Hiển thị nút phân trang */}
      <div>
        {data.map((item, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationApp;
