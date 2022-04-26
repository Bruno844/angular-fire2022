import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: '', component:ShowComponent
  },
  {
    path: 'edit/:id', component:EditComponent
  },
  {
    path: 'create', component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
