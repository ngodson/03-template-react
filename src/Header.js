

export const Header = (props)=> {
    const {pText} = props;
    const {hText} = props;
    return (
      <div class="header">
        <h1>{hText}</h1>
        <p>
         {pText}
        </p>
      </div>
    );
}

