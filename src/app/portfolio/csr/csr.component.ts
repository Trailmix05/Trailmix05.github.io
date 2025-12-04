import { Component } from '@angular/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'

@Component({
	selector: 'app-csr',
	standalone: true,
	imports: [NzGridModule, NzCardModule],
	templateUrl: './csr.component.html',
	styleUrls: ['./csr.component.less', '../../app.component.less'],
})
export class CSRComponent {}
