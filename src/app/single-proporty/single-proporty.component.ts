import { Component, OnInit } from '@angular/core';
import { Property } from '../models/Property.model';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-single-proporty',
  templateUrl: './single-proporty.component.html',
  styleUrls: ['./single-proporty.component.css']
})
export class SingleProportyComponent implements OnInit {

  property: Property;

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) { }

  ngOnInit() {
    this.property = new Property('','','','','','',[]);
    const id = this.route.snapshot.params['id'];
    this.propertiesService.getSingleProporty(+id).then(
      (property: Property)=> {
        this.property = property;
      }
    );

  }

}
