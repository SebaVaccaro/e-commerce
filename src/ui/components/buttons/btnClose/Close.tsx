import "./close.css"
export const Close = () => {
    return (
        <button className="close-button">
            <svg
                className="close-icon"
                width="800px"
                height="800px"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                version="1.1"
                id="Layer_1"
                enable-background="new 0 0 12 12"
            >
                <polygon
                    fill="currentColor"
                    points="12,0.707 11.293,0 6,5.293 0.707,0 0,0.707 5.293,6 0,11.293 0.707,12 6,6.707 11.293,12 12,11.293 6.707,6"
                />
            </svg>

        </button>
    )
}