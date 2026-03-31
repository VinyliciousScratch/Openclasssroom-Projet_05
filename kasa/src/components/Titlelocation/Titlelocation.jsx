import './Titlelocation.scss'


function Titlelocation({title,location}){                                   

  return (
    <div className='Title_box'>
      <h1>{title}</h1>
      <p>{location}</p>
    </div>
  )
}
export default Titlelocation;