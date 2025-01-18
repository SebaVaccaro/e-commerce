import "./menu.css"
export const Menu = () =>{
    return(
        <button
            className="menu-button"
        >
            <svg className="menu-icon" width="800px" height="800px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="5.5" />
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="2.5" />
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="8.5" />
                </g>
            </svg>
            <span className="menu-span">CATALOGO</span>
        </button>
    )
}