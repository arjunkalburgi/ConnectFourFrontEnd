import * as React from "react";
type ReactProps = React.Props<React.DOMComponent<any>>;

interface PositionProps extends ReactProps {
    xposition:    number;
    yposition:    number;
    state:   string; //expecting user, comp or none

    occupy?:      ()=>void;
}

class Position extends React.Component<PositionProps,{}> {
    xposition: number;
    yposition: number;
    state: string;

    constructor(props) {
        super(props);
        this.state = 'none';
        this.xposition = props.xposition;
        this.yposition = props.yposition;
    }

    render() {
        const circleProps = {
            cx: this.props.xposition,
            cy: this.props.yposition,
            r: 10,
            occupiedBy = this.props.occupiedBy
        };
        return <circle {...circleProps} />;
    }
}
