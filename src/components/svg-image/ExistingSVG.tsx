import React, { HTMLFactory } from "react"

interface Props {
    image: HTMLFactory<SVGElement>
}

export class ExistingSvg extends React.Component<Props> {

    render = () => {

        const {
            image,
        } = this.props

        return image
}