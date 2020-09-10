import React, { Component } from "react";
import { Container } from 'react-bootstrap'

class Content extends Component {

    render() {

        console.log('CONTENT PROPS', this.props)
        return (
            <>
                <Container>
                    <div style={{ backgroundColor: "transparent" }}>

                    </div>
                </Container>
            </>

        )
    }
}
export default Content;