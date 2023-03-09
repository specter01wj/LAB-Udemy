import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 's04_01';
  servers: string[] = ['RC-10', 'RC-11', 'RC-12'];
  add_server_id: number = 1;

  onAddServer() {
    this.servers.push('Another Server ' + this.add_server_id);







    this.add_server_id++;
  }

  onRemoveServer(id: number) {
    const position = id;
    this.servers.splice(position, 1);
  }
}
