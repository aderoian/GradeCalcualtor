import React from "react";
import "@css/layout/Display.css";

interface IState {

}

interface IProps {

}

class Display extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"Display"}>
            </div>
        );
    }
}

export default Display