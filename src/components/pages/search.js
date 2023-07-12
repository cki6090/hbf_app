import React from 'react'
import { often_list } from "../data";
import Search_box from '../component/search_box'

export default function search() {
  return (
    <div className='sub_page'>
      <div class="sheader">서치페이지</div>

      <Search_box />

      <div className='often_list'>
        {often_list.map(data => (
          <div>
            <span class="material-symbols-outlined"> {data.icon} </span> {data.tit}
          </div>
        ))}
      </div>

    </div>
  )
}
