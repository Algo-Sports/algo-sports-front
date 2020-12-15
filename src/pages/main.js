import React, {Component} from 'react';
import Banner from '../components/banner';
import TableCard from '../components/tableCard';
import CardListLayout from '../layouts/cardListLayout';
import {onGoingGame, siteInformation, recentBlog, updateLog} from '../data/data';

export class Main extends Component {
    constructor(props) {
        super(props);
        this.onGoingGame = [];
        this.siteInformation = [];
        this.recentBlog = [];
        this.updateLog = [];
        this.setOnGoingGameList();
        this.setSiteInformation();
        this.setRecentBlog();
        this.setUpdateLog();
    }
    
    setOnGoingGameList() {
        console.log(onGoingGame);
        onGoingGame.forEach(game => {
            this.onGoingGame.push(
                {
                    "title": game.gameinfo.title,
                    "description": game.gameinfo.description,
                    "date": "~ "+game.gameinfo.end,
                }
            )
        });
    }

    setSiteInformation() {
        this.siteInformation = siteInformation;
    }

    setRecentBlog() {
        this.recentBlog = recentBlog;
    }

    setUpdateLog() {
        this.updateLog = updateLog;
    }

    render() {
        return (
            <div>
                <Banner title = "Algo sports" subtitle = "Play algorithm!" message = "Join Game & Compete with people"/>
                <CardListLayout>
                    <TableCard key = "ongoing_game_card" tableTitle = "Ongoing Game" data = {this.onGoingGame}/>
                    <TableCard key = "site_imformation_card"tableTitle = "Site Information" data = {this.siteInformation}/>
                    <TableCard key = "recent_blog_card"tableTitle = "Recent Blog" data = {this.recentBlog}/>
                    <TableCard key = "update_log_card"tableTitle = "Update Log" data = {this.updateLog}/>
                </CardListLayout>
            </div>
        )
    }

}