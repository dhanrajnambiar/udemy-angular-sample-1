import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template:'<server></server><hr><server></server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   maximum_allowed : Number = 10;
   text_alignment : String = "center";
   isDisabled : boolean = true;
   server_status : String = "";
   current_server_name : String = "";
   car_name : String = "";
   username : String = "";
   flush_name(){
     this.username = "";
   }
   create_server(){
     this.server_status = "New instance created";
   }
   recce_server(event_data: Event){
     this.current_server_name = (<HTMLInputElement>event_data.target).value;
   }
   constructor(){
      setTimeout(()=>{
        this.isDisabled = false;
      },10000)
   }
   ngOnInit(){
   }
}
