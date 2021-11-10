import React, { Component } from 'react';
import On from './on.png';
import Off from './off.png';
import Open from './open.svg';
import Close from './close.svg';

export default class k314 extends Component {

componentDidMount() {
fetch(`http://78.153.6.107/api/cab/2`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('Request successful', data);
        return data;
      })
      .catch(function(error) {
        console.log('Request failed', error)
      });
 }
    render() {
        var k1 = On, k2 = Open, k3 = Open, buf314,s;
        function status(d, w, l) {
            if (d == 1) {
                k1 = Open;
                buf314 += 1;
            } else {
                k1 = Close;
            }
            if (w == 1) {
                k2 = Open;
                buf314 += 1;
            } else {
                k2 = Close;
            }
            if (l == 1) {
                k3 = On;
                buf314 += 1;
            } else {
                k3 = Off;
            }
            return k1, k2, k3, buf314;
        }

        const k314son = new Map([["cab", "304"], ["light1", "1"], ["light1 id", 1], ["door1", "0"], ["window1", "0"], ["window1 id", 6]]);
        status(k314son.get("door1"), k314son.get("window1"), k314son.get("light1"));

        return (
            <div>
                <div className="fon">
                    <div className="number">314</div>
                    <h1 className="door">Двери:</h1>
                    <h1 className="window">Окна:</h1>
                    <h1 className="light">Свет:</h1>

                    <h1 className="statusDoor">
                        <img
                            src={k1}                           
                        />
                    </h1>
                    <h1 className="statusWindow">
                        <img
                            src={k2}                            
                        />
                    </h1>
                    <h1 className="statusLight">
                        <img
                            src={k3}
                        />
                    </h1>
                </div>
            </div>
        );
    }
}