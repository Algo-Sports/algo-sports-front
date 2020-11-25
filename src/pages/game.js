import React, { Component } from 'react'
import GameContentLayout from '.,/layouts/gameContentLayout';

class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            </>
        )
        // const { router } = this.props;
        // return router.query.game_id ? (
        //     <GameContentLayout game_id = {router.query.game_id}/>

        // ) : null;
    }
}
export default withRouter(Game);