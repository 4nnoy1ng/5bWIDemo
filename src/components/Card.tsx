import React, { ReactElement } from 'react'
import './Card.css'

interface Props {

}

export default function Card({ }: Props): ReactElement {
    return (
        <div className="bg-green-500"> 
            <img className="img"src="https://picsum.photos/200/300" alt="" />
            <div className="name">Name</div>
            <div className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna  </div>
        </div>

    )
}
