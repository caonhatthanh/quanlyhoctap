import { Component, CSSProperties } from "react";

interface Props{
    fullname: string;
    size: number;
}

class ClassComponent extends Component<Props> {
    render() {

        const style: CSSProperties = {
            color: "pink",
        }

        return <h1 style={style}>{this.props.fullname}</h1>;
    }
}

export default ClassComponent;