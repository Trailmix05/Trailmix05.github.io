import { Component } from '@angular/core'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzImageModule } from 'ng-zorro-antd/image'

@Component({
	selector: 'app-who-am-i',
	standalone: true,
	imports: [NzDividerModule, NzGridModule, NzImageModule],
	templateUrl: './who-am-i.component.html',
	styleUrl: './who-am-i.component.less',
})
export class WhoAmIComponent {}
