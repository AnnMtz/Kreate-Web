import './burgerButton.css';

const BurgerButton = ({handleClick, clicked}) => {
    return (
        <div onClick={handleClick} className='menu-icon-wrapper'>
            <div className={`menu-icon ${clicked ? 'menu-icon-open' : ''}`}></div>
        </div>
    );
}

export default BurgerButton;