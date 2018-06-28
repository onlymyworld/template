import React from "react";
export class Hello extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "yf"
        };
    }
    render () {
        return <div>{this.state.name}</div>;
    }
}
