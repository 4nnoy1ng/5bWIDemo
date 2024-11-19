import React, { ReactElement } from 'react'

interface Props {

}

export default function Card({ }: Props): ReactElement {
    return (
        <div className="bg-green-500 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
            <img className="img"src="https://picsum.photos/200/300" alt="" />
            <div className="name">Name</div>
            <div className="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna  </div>
        </div>

    )
}
