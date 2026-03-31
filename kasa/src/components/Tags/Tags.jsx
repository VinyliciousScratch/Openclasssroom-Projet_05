import './Tags.scss';


function Tags({tags}){                                   //Tags
  return (
    <div className='container_tag_box'>
      {tags.map((i , index) =>(
        <p className='tag_box' key={index}>{i}</p>
      ))}
    </div>
  )
}
export default Tags;