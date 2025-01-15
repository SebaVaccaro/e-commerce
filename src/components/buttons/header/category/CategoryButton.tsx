import "./category-button.css"

export const CategoryButton = () => {
    return (
        <button
            className="category-button">
            <svg className="burger-icon" width="800px" height="800px" viewBox="0 0 12 12" enable-background="new 0 0 12 12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="5.5" />
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="2.5" />
                    <rect fill="currentColor" height="1" width="11" x="0.5" y="8.5" />
                </g>
            </svg>
            <span>CATALOGO</span>
        </button>
    )
}