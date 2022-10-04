import React from 'react'

function Thongbao(props) {
  return (
    <div className='mgt'>
         {props.list.length <1 ? <h1>bạn đã hoành thành công việc vui lòng thêm công việc</h1>:''}
        
    </div>
  )
}

export default Thongbao