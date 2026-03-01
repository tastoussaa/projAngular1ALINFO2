import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  serverCreationStatus = false;
  serverCreation = 'No server was created!';
  serverName = 'Server 1';

  getStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreation = 'Server was created!';
  }
}
