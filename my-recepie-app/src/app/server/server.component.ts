import { Component } from "@angular/core";

//store a js object inside that decorator
//by decorator, can import some important info that store as a metadata as a background in this class.
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    
})
export class ServerComponent {
    serverId : number = 10;
    serverStatus : string = 'Offline';

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red'
    }
}