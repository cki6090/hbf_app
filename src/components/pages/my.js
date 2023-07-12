import React from 'react'
import { loginItemList } from "../data";

export default function my() {
  return (
    <div>
      <div className='sheader'>마이페이지</div>

      <div className="login_tit">로그인・회원가입
        <span class="material-symbols-outlined">
          chevron_right</span>

        <p>회원가입하시고 혜택 받아가세요!</p>
      </div>

      <div className="my_list">
        <p className="tit">추천상품</p>
        <p className="list">
          {loginItemList[0].map(list =>
            <div >{list}<span className="material-symbols-outlined">chevron_right</span></div>
          )}
        </p>
      </div>

      <div className="my_list">
        <p className="tit">고객센터</p>
        <p className="list">
          {loginItemList[1].map(list =>
            <div >{list}<span className="material-symbols-outlined">chevron_right</span></div>
          )}
        </p>
      </div>

      <div className="my_list">
        <p className="tit">신규</p>
        <p className="list">
          {loginItemList[2].map(list =>
            <div >{list}<span className="material-symbols-outlined">chevron_right</span></div>
          )}
        </p>
      </div>


    </div>
  )
}
