import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { NzModalModule } from 'ng-zorro-antd/modal'

interface PortfolioItem {
	id: number
	title: string
	image: string
	description: string
}

@Component({
	selector: 'app-projects',
	standalone: true,
	imports: [CommonModule, NzModalModule],
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.less', '../../app.component.less'],
})
export class ProjectsComponent {
	currentIndex = 0

	totalProjects: number = 0

	isVisible: boolean[] = []

	portfolioItems: PortfolioItem[] = [
		{
			id: 1,
			title: 'Flappy Bird',
			image: 'assets/images/projects/Flappy-Bird.jpeg',
			description:
				'Flappy Bird is a classic phone game released in 2013 where you play as a small yellow bird, tapping to flap and gain height, while trying to advance and avoid misaligned pipes, that lead to failure if you touch them. I created a desktop version in C# while following a comprehensive youtube tutorial.',
		},
		{
			id: 2,
			title: 'Task Management App',
			image: 'assets/images/projects/checklist.jpeg',
			description:
				'A task management app aimed towards people who have ADHD or difficulties with priority management. The idea was to have a sort of "routine" that could be used, and each completion for a routine (depending on the difficulty of each task for each person), they would gain points towards a goal. The goals being milestones that each person would like to have, in order to motivate them and entice them to do their tasks. It\'s based on honesty, merit and also good old fun!',
		},
		{
			id: 3,
			title: 'Various school projects',
			image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
			description:
				'During my associates degree at the Blagnac Institute of Technology, we had to complete various school projects. Each project was either for an individual module, or for multiple of them in one project. They would mainly consist of a coding and programming portion, to test our technical abilities, and also to respond to a clients demand. Additionally, the projects would have an organisational, management and communication part, asking us to use the skills learned during class, to be able to communicate well with the client, and be able to present our project and our work while breaking it down to reach a much larger audience. Some of these projects were: A simple podium system for horse races (using Java); A bank account managment app, having to create CRUD functions along with an interface and other functionalities; Search for a client, listen to their needs, and conceptualise a solution, along with many others.',
		},
		{
			id: 4,
			title: 'CapitalExplorer',
			image: 'assets/images/projects/logo-amc.jpeg',
			description:
				'CapitalExplorer is the app that I used to work on during my first workstudy. It is a wealth management app, using Angular and C#. It was my first introduction to Computer Science in a professional space, and it was eye-opening to see that web development is not just HTML, CSS and JavaScript code.',
		},
		{
			id: 5,
			title: 'Collins Aerospace',
			image: 'assets/images/projects/logo-collins.svg',
			description:
				'At my current workstudy (Colins Aerospace) I can work on multiple projects. These projects are important because they facilitate and help pilots, airlines, crew along with the fabricants. Planes are a very important means of transport nowadays, and being able to alleviate the workload is extremely important. I understand the importance with what I work on, and it makes me even more passionate with my work.',
		},
	]

	ngOnInit() {
		for (let _ = 0; _ < this.portfolioItems.length; _++) {
			this.isVisible.push(false)
		}

		this.totalProjects = this.portfolioItems.length
	}

	nextSlide(): void {
		this.currentIndex = (this.currentIndex + 1) % this.portfolioItems.length
	}

	prevSlide(): void {
		this.currentIndex =
			this.currentIndex === 0 ? this.portfolioItems.length - 1 : this.currentIndex - 1
	}

	goToSlide(index: number): void {
		this.currentIndex = index
	}

	getItemIndex(offset: number): number {
		const index = this.currentIndex + offset
		if (index < 0) return this.portfolioItems.length + index
		if (index >= this.portfolioItems.length) return index - this.portfolioItems.length
		return index
	}

	getCurrentItem(): PortfolioItem {
		return this.portfolioItems[this.currentIndex]
	}

	getPreviousItem(): PortfolioItem {
		return this.portfolioItems[this.getItemIndex(-1)]
	}

	getNextItem(): PortfolioItem {
		return this.portfolioItems[this.getItemIndex(1)]
	}

	closeModal(modalID: number = -1) {
		if (modalID > -1) {
			this.isVisible[modalID] = false
		}
	}

	showModal(modalID: number = -1) {
		if (modalID > -1) {
			this.isVisible[modalID] = true
		}
	}
}
