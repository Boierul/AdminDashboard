import './Square.css'

export default function Square({insideText, color}) {
    return (
        <div className={"square"} style={{backgroundColor: color}}>
            <p className={"square_text"}>{insideText}</p>
        </div>)
}