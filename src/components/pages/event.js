import React from 'react'
import { eventList } from "../data";

export default function event() {
  return (
    <div>
      <div className='sheader'>마이페이지</div>

      {eventList.map(data => (
      <div className='even_list'>
          <div className="img_Box">
            <img src={data.img} className='App-logo' alt='React' width="100%"/>
          </div>

          <div className="el_con">
            <p className="tit">{data.tit}</p>
            <p className="con">{data.con}</p>
          </div>
      </div>
      ))}

    </div>
  )
}
