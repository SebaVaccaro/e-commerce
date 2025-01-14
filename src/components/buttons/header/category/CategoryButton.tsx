import burgerIcon from"../../../../assets/burger-menu.svg"
import "./category-button.css"
export const CategoryButton = () =>{
    return(
        <button className="category-button">
            <img className="burgerIcon" src={burgerIcon} alt="burger-Icon" />
            <span>CATALOGO</span>
        </button>
    )
}