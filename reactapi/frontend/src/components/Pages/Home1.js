import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        var value = "Требуются действия", text = [], bufer = "";
        function status(buf) {
            for (let i = 1; i < buf.length; i=i+3) {            
                if ((buf[i - 1] == 1) || (buf[i] == 1) || (buf[i + 1] == 1) ) {
                    text.push((314 + (i - (i % 3))/3));                   
                }
            }  
            if (text.length < 1) {
                value = "Действий не требуется";
            } else {
                value = "Требуются действия";
            }

            for (var i in text) {
                bufer += text[i];
                bufer += (" ");
            }
            return bufer;
        }

        const k314son = new Map([["cab", "304"], ["light1", "1"], ["light1 id", 1], ["door1", "0"], ["window1", "0"], ["window1 id", 6]]);
        const k315son = new Map([["cab", "305"], ["light1", "1"], ["light1 id", 1], ["door1", "1"], ["window1", "1"], ["window1 id", 6]]);
        const k316son = new Map([["cab", "306"], ["light1", "1"], ["light1 id", 1], ["door1", "0"], ["window1", "0"], ["window1 id", 6]]);

        status([k314son.get("door1"), k314son.get("window1"), k314son.get("light1"),
            k315son.get("door1"), k315son.get("window1"), k315son.get("light1"),
            k316son.get("door1"), k316son.get("window1"), k316son.get("light1")])

        return (
            <div className="fon">
                <h1 className="homework" >{value}</h1>
                <h1 className="list">{bufer}</h1>
            </div>
        );
    }
}