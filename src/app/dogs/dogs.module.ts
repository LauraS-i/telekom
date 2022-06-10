import {NgModule} from "@angular/core";
import {DogsViewComponent} from "./dogs-view/dogs-view.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {DogsService} from "./dogs.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

const routes:Routes = [
  {
    path: "",
    component: DogsViewComponent
  }
]
@NgModule({
  declarations:[DogsViewComponent],
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes), HttpClientModule, CommonModule, FormsModule],
  providers: [HttpClient, DogsService]
})
export class DogsModule{

}
