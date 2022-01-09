import React from "react";
import './EmployeeCard.css';

 function EmployeeCard(props) {
    return (
        <>
            <li className='People__item'> 
                <figure className='People__item__pic-wrap' data-category={props.label}>
                    <img
                        className='People__item__img'
                        alt='Image not found'
                        src={props.src}   
                        onClick = {props.onClick}
                    />
                </figure>
                <div className='People__item__info'>
                    <h5 className='People__item__text'>{props.text}</h5>
                </div>
                
            </li>
        </>
    )
}

export default EmployeeCard;