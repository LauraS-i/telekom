import {NgModule} from "@angular/core";
import {CatsViewComponent} from "./cats-view/cats-view.component";
import {RouterModule, Routes} from "@angular/router";

const routes:Routes = [
  {
    path: "",
    component: CatsViewComponent
  }
]
@NgModule({
  declarations:[CatsViewComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CatsModule{

}
