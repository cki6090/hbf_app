import React from "react";

function search_box() {
  return (
    <div className="search_box">
      <div>
        <span class="material-symbols-outlined">search</span>
      </div>

      <div>
        <input placeholder="검색어를 입력해 주세요."></input>
      </div>
    </div>
  );
}

export default search_box;
