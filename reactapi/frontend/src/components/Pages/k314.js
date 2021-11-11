import React, { Component } from 'react';
import On from './on.png';
import Off from './off.png';
import Open from './open.svg';
import Close from './close.svg';

export default class k314 extends Component {

constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch(`http://78.153.6.107/api/cab/1`)
    .then(response => response.json())
    .then(json => this.setState({ posts: json }))
  }
    render() {
        const { posts } = this.state;
        const door = posts['door']
        const window = posts['window']
        const light = posts['light']
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

        status(door,window,light);

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
