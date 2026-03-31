import './Host.scss';

function Host({host}){                              
// saute une ligne avec au moment de l'espace
  return (
    <div className='Host_container'>
      <p className="host-name">{host.name.replace(' ', '\n')}</p> 
      <img src = {host.picture} alt ={host.picture}/> 
    </div>
  )
}
export default Host;