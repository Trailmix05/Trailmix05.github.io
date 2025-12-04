import { Component } from '@angular/core'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'

@Component({
	selector: 'app-footer-bar',
	standalone: true,
	imports: [NzGridModule, NzIconModule],
	templateUrl: './footer-bar.component.html',
	styleUrls: ['./footer-bar.component.less', '../../app.component.less'],
})
export class FooterBarComponent {
	email = 'zacharyivars@icloud.com'
}
