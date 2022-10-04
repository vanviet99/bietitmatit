import React from 'react'

function Modal(props) {
    function add(){
     let date = document.querySelector('#date').value
     let name = document.querySelector('#todoo').value
     if(!name || !date){
        return alert('dien thieu')
     }
     props.addTodo({date:date,do:name})
      document.querySelector('#date').value =''
      document.querySelector('#todoo').value =''
    }
    function xoa
  return (
    <React.Fragment>
     <div className="input-group mb-3">
     <input  type="date" id='date' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
      <input  type="text" id='todoo' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <button type="button" className="btn btn-primary" onClick={add}>Thêm</button>
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">STT</th>
      <th scope="col">Date</th>
      <th scope="col">Todo</th>
      <th scope="col">Acction</th>
    </tr>
  </thead>
  <tbody>
  {props.list.map(function(value,index){
        return (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{value.date}</td>
            <td>{value.do}</td>
            <td>
            <button type="button" className="btn btn-success bg">Sửa</button>
            <button type="button" className="btn btn-danger bg" onClick={Xoa}>Xóa</button>
            </td>
          </tr>
        )
      })}
  </tbody>
</table>
    </div>
     </React.Fragment>
  )
}

export default Modal