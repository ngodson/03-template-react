import './App.css';

export const Navbar = (props) => {
    let url = "#"
    const {linkName} = props;
    return (
      <div className="navbar">
        <a href={url}>{linkName}</a>
        <a href={url}>{linkName}</a>
        <a href={url}>{linkName}</a>
        <a href={url}>{linkName}</a>
      </div>
    );
}