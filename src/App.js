import React from "react";
import "./App.css";
import ParticlesBg from "particles-bg";
import MouseParticles from 'react-mouse-particles';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            covidData: null,
        };
    }

    componentDidMount() {
        fetch("https://hpb.health.gov.lk/api/get-current-statistical")
            .then((Response) => Response.json())
            .then((users) => {
                console.log(users);
                this.setState({
                    covidData: users.data,
                });
            });
    }

    render() {
        return (
            <div className="App">
                {this.state.covidData != null && (
                    <div>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                        ></link>
                        <link
                            rel="stylesheet"
                            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                            crossorigin="anonymous"
                        ></link>
                        <link
                            href="https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap"
                            rel="stylesheet"
                        ></link>
                        <nav class="navbar navbar-light bg-light">
                            <h1
                                class="navbar navbar-expand-lg navbar-light bg-light"
                                href="#"
                            >
                                COVID-19 SriLanka Tracker
                            </h1>
                            <form class="form-inline my-2 my-lg-0">
                                <a href="https://github.com/BuddhikaD">
                                    <h1>
                                        <span class="fa fa-github"></span>
                                    </h1>
                                </a>
                            </form>
                        </nav>
                        <br/>
                        <br/>
                        <h1>COVID-19 ශ්‍රී ලංකා තත්ත්ව වාර්තාව</h1>
                        <h5 class="text-muted">Last Update Time</h5>
                        <b>
                            <h4>{this.state.covidData.update_date_time}</h4>
                        </b>
                        <br/>
                        <br/>
                        <br/>
                        <div class="container pt-3 ">
                            <div class="card-deck">
                                <div class="card text-white bg-danger mb-3">
                                    <div class="card-body">
                                        <h1>
                                            <span class="fa fa-ambulance"></span>
                                        </h1>
                                        <h1 class="card-title">මුළු රෝගීන් සංඛ්‍යාව</h1>
                                        <h1 class="card-text ">
                                            <h1 class="badge badge-light">
                                                {this.state.covidData.local_total_cases}
                                            </h1>
                                        </h1>
                                    </div>
                                </div>
                                <div class="card text-white bg-secondary mb-3">
                                    <div class="card-body">
                                        <h1>
                                            <span class="fa fa-hotel"></span>
                                        </h1>
                                        <h1 class="card-title">මරණ සංඛ්‍යාව</h1>
                                        <h1 class="card-text">
                                            <h1 class="badge badge-light">
                                                {this.state.covidData.local_deaths}
                                            </h1>
                                        </h1>
                                    </div>
                                </div>
                                <div class="card text-white bg-dark mb-3">
                                    <div class="card-body">
                                        <h1>
                                            <span class="fa fa-wheelchair"></span>
                                        </h1>
                                        <h2 class="card-title">නවතම වාර්තාවීම්</h2>

                                        <h1 class="card-text">
                                            <h1 class="badge badge-light">
                                                {this.state.covidData.local_new_cases}
                                            </h1>
                                        </h1>
                                    </div>
                                </div>
                                <div class="card text-white bg-success mb-3">
                                    <div class="card-body">
                                        <h1>
                                            <span class="fa fa-male"></span>
                                        </h1>
                                        <h1 class="card-title">සුවය ලැබූ සංඛ්‍යාව</h1>
                                        <h1 class="card-text">
                                            <h1 class="badge badge-light">
                                                {this.state.covidData.local_recovered}
                                            </h1>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <p>
                                This might take several minutes to be updated,since Health
                                Promotion Bureau is issuing verified data from reliable sources
                            </p>
                            <br/>
                            <br/>
                            <footer>
                                Made with ❤ by Buddhika Dananjaya | Powered by hpb.health.gov.lk
                            </footer>
                        </div>

                        {}
                        <ParticlesBg type="cobweb" bg={true}/>
                        <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
                    </div>
                )}
            </div>
        );
    }
}

export default App;
