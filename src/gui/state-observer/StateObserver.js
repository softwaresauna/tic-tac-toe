import {Component} from 'react';
import {registerStateObserver} from "./subject";

export class StateObserver extends Component {

    constructor(props) {

        super(props);

        registerStateObserver(this);
    }
}
