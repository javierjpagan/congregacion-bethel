import React from 'react';
import Collapsible from 'react-collapsible';

class SobreHeader extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }
    
    toggle() {
        this.setState(state => ({ collapse: !state.collapse }));
    }

    render(){

        const { sobreheader, sobretext } = this.props.sobreheaders;

        return (
            <Collapsible trigger={sobreheader}>
                <p>{sobretext}</p>
            </Collapsible>
        );
    }

}

export default SobreHeader;