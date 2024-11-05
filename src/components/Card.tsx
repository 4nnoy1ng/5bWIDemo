import React, { ReactElement } from 'react'
import './Card.css'

interface Props {

}

export default function Card({ }: Props): ReactElement {
    return (
        <div className="card"> 
            <img className="img"src="https://picsum.photos/200/200" alt="" />
            <div>Lorem ipsum dolor sit amet, consetetur </div>
        </div>

    )
}
