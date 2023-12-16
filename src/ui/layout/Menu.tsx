import React from "react";
import "@css/layout/Menu.css";

interface IState {

}

interface IProps {

}

class Menu extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={"Menu"}>
            </div>
        );
    }
}

export default Menu