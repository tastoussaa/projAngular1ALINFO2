import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverID = 1;
  serverStatus = "offline";
  serverCreationStatus = false;
  serverCreation = "not created";
  serverName = "Server 1";
  serverCreated = false;

  getStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreation = "created";
    this.serverCreated = true;
    this.serverStatus = "online";
  }
}
