import React from "react";
import "@css/App.css";
import Menu from "@ui/layout/Menu";
import Display from "@ui/layout/Display";

class App extends React.Component<any, never> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <>
                <div className={"AppContainer"}>
                    <div className={"AppHeader"}>
                        <div className={"Title"}>
                            <h1>Grade Calculator</h1>
                        </div>
                    </div>
                    <div className={"CalculatorContainer"}>
                        <Menu />
                        <Display />
                    </div>
                </div>
            </>
        );
    }
}

export default App