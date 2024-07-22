import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { ProfileComponent } from './profile/profile.component';
import { StudentsComponent } from './students/students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { PaymentsComponent } from './payments/payments.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
const routes: Routes = [
  {path:"",component:AdminTemplateComponent},
  {path:"admin",component:AdminTemplateComponent,
    children:[
  {path:"profile",component:ProfileComponent},
  {path:"home",component:HomeComponent},
  {path:"loadStudents",component:LoadStudentsComponent},
  {path:"loadPayments",component:LoadPaymentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"payments",component:PaymentsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"education",component:EducationComponent},
  {path:"workExperience",component:WorkExperienceComponent},
  {path:"technicalSkills",component:TechnicalSkillsComponent},
  { path: "portfolio", component: PortfolioComponent },
  { path: "", redirectTo: "portfolio", pathMatch: "full" },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
