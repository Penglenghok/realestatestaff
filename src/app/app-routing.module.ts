import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./shared/layout/layout.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NewClientComponent } from "./pages/new-client/new-client.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "new-client", component: NewClientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
