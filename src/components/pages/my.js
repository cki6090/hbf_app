import React from 'react'
import { loginList } from "../data";

export default function my() {
  return (
    <div>
      <div className='sheader'>마이페이지</div>

      <div className="login_tit">로그인・회원가입 
        <span class="material-symbols-outlined">
        chevron_right</span>

        <p>회원가입하시고 혜택 받아가세요!</p>
      </div>

      {loginList.map(data => (
        <div className="my_list" key={data.id}>
          <p className="tit">{data.tit}</p>
          <p className="list">{data.con}
          <span class="material-symbols-outlined">chevron_right</span>
        </p>
      </div>
      ))}

    </div>
  )
}
