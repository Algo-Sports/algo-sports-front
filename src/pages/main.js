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

        onGoingGame.forEach(game => {
            this.onGoingGame.push(
                {
                    "title": game["name"],
                    "description": game["description"],
                    "date": "~ "+game["end"],
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
                    <TableCard tableTitle = "Ongoing Game" data = {this.onGoingGame}/>
                    <TableCard tableTitle = "Site Information" data = {this.siteInformation}/>
                    <TableCard tableTitle = "Recent Blog" data = {this.recentBlog}/>
                    <TableCard tableTitle = "Update Log" data = {this.updateLog}/>
                </CardListLayout>
            </div>
        )
    }

}