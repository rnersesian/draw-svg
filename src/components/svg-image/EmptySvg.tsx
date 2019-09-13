import React from "react"

interface Props {
    viewBox: String;
    style?: React.CSSProperties
}

export class EmptySvg extends React.Component<Props> {

    render = () => {

        const {
            viewBox,
            style,
        } = this.props


        return (
            <svg viewBox={viewBox} style={style}>
            
            </svg>
        )
}