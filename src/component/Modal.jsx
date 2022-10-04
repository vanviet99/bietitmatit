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
    function Deletee(index){
        let clonee = [...props.list]
        clonee.splice(index,1)
        props.Delete(clonee)
    }
    function Update(index){
        document.querySelector('#date').value = props.list[index].date
        document.querySelector('#todoo').value = props.list[index].do
        props.Setindexx(index)
    }
    function up(index){
      let clonn = [...props.list]
      let date = document.querySelector('#date').value
      let name = document.querySelector('#todoo').value
      if(!name || !date){
        return alert('dien thieu')
     }
      var udlist = {
        date:date,
        do:name
      }
      props.Setindexx(-1)
      clonn.splice(index,1,udlist)
      props.Delete(clonn)
    }
  //  for(let i=0;i<props.list.length;i++){
  //   let datetoday = new Date()
  //   let datetime = new Date(props.list[i].date)

  //  }
 
    
     
      let datetoday = new Date()

    
  return (
    <React.Fragment>
     <div className="input-group mb-3">
     <input  type="date" id='date' className="form-control" aria-label="   example input" aria-describedby="inputGroup-sizing-default"></input>
      <input  type="text" id='todoo' className="form-control" aria-label="   example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    <button type="button" className="btn btn-primary ldp" onClick={add}>Thêm</button>
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
          let color = false
    if(new Date(value.date) > datetoday){
      // tra[index].setAttribute('style','background:red')
          color = true
          
    }
        return (
          <tr key={index} >
            <td>{index+1}</td>
            <td>{value.date}</td>
            <td>{value.do}</td>
            <td className='aaa'>
            {props.indexx !== index ?<button type="button" className="btn btn-success bg lpd"  onClick={()=>Update(index)}>Sửa</button> : ''}
            <button type="button" className="btn btn-warning bg" onClick={()=>Deletee(index)}>Xóa</button>
            {props.indexx == index ?<button type="button" className="btn btn-info bg " onClick={()=>up(index)} >Lưu</button>: ''}
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


