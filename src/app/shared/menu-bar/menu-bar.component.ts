import { Component } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { RouterOutlet, RouterLink } from '@angular/router'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

@Component({
	selector: 'app-menu-bar',
	standalone: true,
	imports: [
		NzIconModule,
		NzDropDownModule,
		NzMenuModule,
		NzLayoutModule,
		RouterOutlet,
		NzGridModule,
		RouterLink,
	],
	templateUrl: './menu-bar.component.html',
	styleUrls: ['./menu-bar.component.less', '../../app.component.less'],
})
export class MenuBarComponent {
	hover = false
}
