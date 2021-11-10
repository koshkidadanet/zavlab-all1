import React, { Component } from 'react';
import On from './on.png';
import Off from './off.png';
import Open from './open.svg';
import Close from './close.svg';

export default class k314 extends Component {
    render() {
        var k1 = On, k2 = Open, k3 = Open, buf314;
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

        status(0, 0, 0);
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