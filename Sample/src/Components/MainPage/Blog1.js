import React, { Component } from 'react';

class Blog1 extends Component {
    render() {
        return (
            <div className="BlogPost">
                <div className="MainBody-style">
                    <div className="split left">

                        <h2>Photographing Rhinos</h2>
                        <div className="Image">
                            <img src="https://img.burrard-lucas.com/kenya/full/rhino.jpg"></img>
                        </div>
                        <p> Date-Oct 24, 2019.</p>
                        <p>As I was winding up the fieldwork for Land of Giants, I shifted focus to another of Tsavo’s majestic inhabitants: Black Rhino. Tsavo West is a one of the most ruggedly wild and beautiful landscapes I have encountered in Africa, and a fitting bastion for these ancient mammals.
                       </p>
                      </div>
                    <div className="vertical"></div>
                    <div className="split right">
                        <div className="centered-right">
                            <div className="Blog-title">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog1;