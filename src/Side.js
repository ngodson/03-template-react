
import "./App.css"

export const Side = (props)=> {
    const {hTwo,photoOfme,image,pText,hThree,pTag} = props;
    return (
    
    <div className="side">
    <h2>{hTwo}</h2>
    <h5>{photoOfme}</h5>
    <div className="fakeimg" style={{height:200}}>{image}</div>
    <p>{pText}</p>
    <h3>{hThree}</h3>
    <p>{pTag}</p>
    <div className="fakeimg" style={{height:60}}>{image}</div><br />
    <div className="fakeimg" style={{height:60}}>{image}</div><br />
    <div className="fakeimg" style={{height:60}}>{image}</div>
    </div>
 
    )
}