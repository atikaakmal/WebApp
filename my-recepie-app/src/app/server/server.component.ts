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
    getServerStatus() {
        return this.serverStatus;
    }
}