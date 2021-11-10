import React, { Component } from 'react';
import On from './on.png';
import Off from './off.png';
import Open from './open.svg';
import Close from './close.svg';
export default class k315 extends Component {
    render() {
        var k1 = On, k2 = Open, k3 = Open;
        function status(d, w, l) {
            if (d == 1) {
                k1 = Open;
            } else {
                k1 = Close;
            }
            if (w == 1) {
                k2 = Open;
            } else {
                k2 = Close;
            }
            if (l == 1) {
                k3 = On;
            } else {
                k3 = Off;
            }
            return k1, k2, k3;
        }

        const k315son = new Map([["cab", "305"], ["light1", "1"], ["light1 id", 1], ["door1", "1"], ["window1", "1"], ["window1 id", 6]]);
        status(k315son.get("door1"), k315son.get("window1"), k315son.get("light1"));

        return (
            <div>
                <div className="fon">
                    <div className="number">315</div>
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