import React from 'react'
import { eventList } from "../data";

export default function event() {
  return (
    <div className='sub_page'>
      <div className='sheader'>EVENT 페이지</div>

      {eventList.map(data => (
        <div className='even_list' key={data.id}>
          <div className="img_Box">
            <img src={data.img} width="100%" />
          </div>

          <div className="el_con">
            <p className="tit">{data.tit} <span class="material-symbols-outlined"> {data.icon} </span></p>
            <p className="con">{data.con}</p>
          </div>
        </div>
      ))}

    </div>
  )
}
