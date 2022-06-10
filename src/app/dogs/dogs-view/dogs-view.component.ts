import {Component, OnInit} from '@angular/core';
import {DogsService} from "../dogs.service";
import {DogsResponseInterface} from "../dogs-response.interface";
import {map} from 'rxjs/operators';
import {DogsInterface} from "../dogs.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.component.html',
  styleUrls: ['./dogs-view.component.css']
})
export class DogsViewComponent implements OnInit {

  breeds: (string | Array<string>)[][] = [];
  dogs: DogsInterface[] = [];
  selectedBreed: string = '';
  filteredBreeds: DogsInterface[] = [];
  currentSort: string = 'asc'

  constructor(private readonly dogsService: DogsService, private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((qp)=> {
      if(qp['sort']== "desc") {
        this.currentSort = 'desc';
        this.filteredBreeds = this.filteredBreeds.reverse()
      }
    })
    this.dogsService.getDogs().pipe(
      map((data: DogsResponseInterface) => {
        Object.entries(data.message).map((item, index) => {
          this.breeds.push(item)
        })
        return this.breeds.map((item: Array<any>) => ({
          name: item[0],
          types: item[1],
          subtype: false
        }));
      }))
      .subscribe((data: DogsInterface []) => {
          this.dogs = data;
          this.filteredBreeds = [...this.dogs];

          for (const item of this.dogs) {
            if (item.types.length > 0) {
              item.subtype = true;
            }
          }
        }
      )

  }
  filter(breed: string) {
    if(!this.selectedBreed){
      this.filteredBreeds = this.dogs;
    }else{
      this.filteredBreeds = this.dogs.filter((dog) =>
        dog.name === breed
      )}

  }
}
