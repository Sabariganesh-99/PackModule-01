import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PackComponent } from './pack/pack.component';
import { PacklistComponent } from './packlist/packlist.component';
import { PacklistCostComponent } from './packlist-cost/packlist-cost.component';
import { PacklistDaysvalidityComponent } from './packlist-daysvalidity/packlist-daysvalidity.component';

import { UpdatePackComponent } from './update-pack/update-pack.component';


const routes: Routes = [{path:"register", component:RegisterComponent},
                        {path:"login",component:LoginComponent},
                        {path: '', redirectTo: 'login', pathMatch: 'full'},
                        {path:"admin",component:AdminComponent},
                        {path:"pack",component:PackComponent},
                        {path:"packlist",component:PacklistComponent},
                        {path:"cost",component:PacklistCostComponent},
                        {path:"daysvalidity",component:PacklistDaysvalidityComponent},
                        {path:"updatepack/:id",component:UpdatePackComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [RegisterComponent]
