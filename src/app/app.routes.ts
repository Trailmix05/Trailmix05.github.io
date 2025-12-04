import { Routes } from '@angular/router'
import { WhoAmIComponent } from './portfolio/who-am-i/who-am-i.component'
import { ProjectsComponent } from './portfolio/projects/projects.component'
import { MobilityComponent } from './portfolio/mobility/mobility.component'
import { ExperienceCVComponent } from './portfolio/experience-cv/experience-cv.component'
import { CSRComponent } from './portfolio/csr/csr.component'

export const routes: Routes = [
	{ path: '', component: WhoAmIComponent },
	{ path: 'projects', component: ProjectsComponent },
	{ path: 'mobility', component: MobilityComponent },
	{ path: 'experience-CV', component: ExperienceCVComponent },
	{ path: 'csr', component: CSRComponent },
]
