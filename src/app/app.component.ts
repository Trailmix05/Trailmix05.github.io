import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component'
import { FooterBarComponent } from './shared/footer-bar/footer-bar.component'

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MenuBarComponent, FooterBarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.less',
})
export class AppComponent {
	title = 'portfolio'
}
