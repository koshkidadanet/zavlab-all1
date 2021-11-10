import React, { Component } from 'react';
import 'D:/site/zavlab-all1/reactapi/frontend/src/index.css';
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
        status([0, 1, 0, 0, 1, 0, 1, 1, 0])
        return (
            <div className="fon">
                <h1 className="homework" >{value}</h1>
                <h1 className="list">{bufer}</h1>
            </div>
        );
    }
}