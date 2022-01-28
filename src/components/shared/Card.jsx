
function Card( { children, reverse } ) 
{
  return(
    // <div className={`card ${reverse && 'reverse'}`}>{ children }</div>
    <div 
    className="card"
    style={{
        backgroundColor: reverse && "rgba(0,0,0,0.4)",
        color: reverse && "#fff"
    }}>
        { children }
    </div>
  );
}

export default Card;
