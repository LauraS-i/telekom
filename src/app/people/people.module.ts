import {NgModule} from "@angular/core";
import {PeopleViewComponent} from "./people-view/people-view.component";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {
    path: "",
    component: PeopleViewComponent
  }
]
@NgModule({
  declarations:[PeopleViewComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PeopleModule{

}
