import React from "react";
import ReactDOM from "react-dom";

export default class Cards extends React.Component {
    render() {
        return (
            <>
            <div className='slider owl-carousel'>
                <div className="card">
                    <div className="card-img">
                        <img src="https://i1.sndcdn.com/artworks-RKPowWhzXAEUb3lK-rjLhdg-t200x200.jpg"></img>
                    </div>
                    <div className="content">
                        <div className="title"><a href="https://soundcloud.com/jlucher/first-steps" target="_blank">First Steps</a></div>
                        <br />
                        <div className='subtitle'>2022</div>
                        <div className="song-player"><audio controls><source src="music/First Steps.mp3" type="audio/mp3"></source></audio></div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="https://i1.sndcdn.com/artworks-Dh2POGVpVbHuSmW8-tjpxsg-t500x500.jpg"></img>
                    </div>
                    <div className="content">
                        <div className="title"><a href="https://soundcloud.com/jlucher/green-hill-zone-chill-electronic-remix" target="_blank">Green Hill Zone - Chill Electronic Mix</a></div>
                        <div className='subtitle'>2020</div>
                        <div className="song-player"><audio controls><source src="music/GHZ-JLucher.mp3" type="audio/mp3"></source></audio></div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-img">
                        <img src="https://i1.sndcdn.com/artworks-MPFezXU9ius1hxGF-OEfghg-t240x240.jpg"></img>
                    </div>
                    <div className="content">
                        <div className="title"><a href="https://m.soundcloud.com/jlucher/order-66-the-finale" target="_blank">Order 66<br />The Finale Mix</a></div>
                        <div className='subtitle'>2020</div>
                        <div className="song-player"><audio controls><source src="music/Order 66 - The Finale.mp3" type="audio/mp3"></source></audio></div>
                    </div>
                </div>
            </div>
            <script>
      
    </script>
            </>
        );
    }
}