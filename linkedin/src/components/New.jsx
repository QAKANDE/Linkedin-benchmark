import React, { Component } from 'react'
import NavBar from "./NavBar";
import NewsFeedPage from "./NewsFeedPage";
import Footer from "./Footer";

class New extends Component {
    render() {
        return (
            <>
                <NavBar />
                <NewsFeedPage />
                <Footer />
            </>
        )
    }
}
export default New;