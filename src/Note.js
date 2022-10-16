

export const Note = (props)=> {
  const {textName} = props;
    return (
      <div style={{backgroundColor:"yellow",padding:5}}>
        <h4 style={{textAlign:"center"}}>
          {textName}
        </h4>
      </div>
    );    
}
