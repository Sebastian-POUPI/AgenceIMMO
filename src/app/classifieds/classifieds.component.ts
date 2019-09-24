import { Component, OnInit, OnDestroy } from '@angular/core';
import { Property } from '../models/Property.model';
import { Subscription } from 'rxjs';
import { PropertiesService } from '../services/properties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent implements OnInit, OnDestroy {


  properties: Property[];
  propertiesSubscription: Subscription;


  constructor(private propertiesService: PropertiesService,
    private router: Router) { }

  ngOnInit() {
    this.propertiesSubscription = this.propertiesService.propertiesSubject.subscribe(
      (properties: Property[])=> {
        this.properties = properties;
      }
    );
    this.propertiesService.getProperties();
    this.propertiesService.emitProperties();
  }
  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }

  onViewProperty(id: number) {
    this.router.navigate(['/property', id]);
  }
}

