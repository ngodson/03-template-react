import './App.css';

export const Aside = (props) => {
    const {hTwoFirst,hFiveFirst,image,pFirst,pSecond,hTwoSecond,hFiveSecond,pThird} = props;
    return (
    <div className="main">
    <h2>{hTwoFirst}</h2>
    <h5>{hFiveFirst}</h5>
    <div className="fakeimg" style={{height:200}}>{image}</div>
    <p>{pFirst}</p>
    <p>{pSecond}</p>
    <br />
    <h2>{hTwoSecond}</h2>
    <h5>{hFiveSecond}</h5>
    <div className="fakeimg" style={{height:200}}>{image}</div>
    <p>{pFirst}</p>
    <p>{pThird}</p>
  </div>
  )
}


