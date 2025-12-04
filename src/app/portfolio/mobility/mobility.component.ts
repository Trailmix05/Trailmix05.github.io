import { Component } from '@angular/core'
import { NzGridModule } from 'ng-zorro-antd/grid'

import { NzModalModule } from 'ng-zorro-antd/modal'
import { NgTemplateOutlet } from '@angular/common'

interface MobilityProject {
	id?: number
	title: string
	location: string
	country: string
	duration: string
	type: string
	description: string
}

@Component({
	selector: 'app-mobility',
	standalone: true,
	imports: [NzModalModule, NgTemplateOutlet, NzGridModule],
	templateUrl: './mobility.component.html',
	styleUrl: './mobility.component.less',
})
export class MobilityComponent {
	isVisible: boolean[] = []
	projects: MobilityProject[] = [
		{
			title: 'Technical University of Darmstadt',
			location: 'Darmstadt',
			country: 'Germany',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'The Technical University of Darmstadt is an extremely prestigious and reputable technical university in Germany. The Computer Science department was founded in 1972 and was one of the first computer science departments in Germany. They are also pioneers in the research field, with multiple figureheads in computer science creating innovative solutions and ways of thinking.',
		},
		{
			title: 'Aalto University',
			location: 'Aalto',
			country: 'Finland',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'Aalto University in Finland is a prestigious multidisciplinary university known for its strong emphasis on technology, business, and design. Founded in 2010 through the merger of three leading Finnish universities, Aalto has quickly established itself as a pioneer in innovation and entrepreneurship. Its schools of engineering and business are internationally recognized, and the university fosters cutting-edge research in fields such as digital technologies, sustainable energy, and creative industries.',
		},
		{
			title: 'University of Oulu',
			location: 'Oulu',
			country: 'Finland',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'The University of Oulu, located in northern Finland, is a well-regarded research university with a strong focus on technology and natural sciences. Established in 1958, it was among the first Finnish universities to develop computer science and information technology programs. The university is known for its pioneering research in wireless communications, biotechnology, and environmental sciences, contributing significantly to technological advancements in the Arctic region and beyond.',
		},
		{
			title: 'Tampere University of Applied Sciences',
			location: 'Tampere',
			country: 'Finland',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'Tampere University of Applied Sciences (TAMK) in Finland is a leading institution for applied sciences and professional education. It offers a wide range of practice-oriented degree programs in technology, business, health care, and social services. TAMK is recognized for its strong collaboration with local industries and its commitment to applied research and innovation, preparing students for immediate impact in the workforce with a focus on real-world problem solving.',
		},
		{
			title: '"La Sapienza" University',
			location: 'Rome',
			country: 'Italy',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'Sapienza University of Rome, one of Europe’s oldest and largest universities, has a distinguished reputation in science, engineering, humanities, and social sciences. Founded in 1303, it has been a center of academic excellence and innovation for centuries. Sapienza offers comprehensive programs in computer science, engineering, and architecture, and is renowned for its research contributions in artificial intelligence, robotics, and cultural heritage preservation.',
		},
		{
			title: 'Delf University',
			location: 'Delf',
			country: 'Netherlands',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'Delft University of Technology in the Netherlands is a world-leading technical university known for its excellence in engineering and technology education and research. Established in 1842, TU Delft has been at the forefront of innovation in fields such as aerospace, civil engineering, and computer science. The university is celebrated for its strong focus on sustainable technologies, smart systems, and interdisciplinary collaboration, shaping future engineers and researchers globally.',
		},
		{
			title: 'Georgia Tech',
			location: 'Atlanta, Georgia',
			country: 'USA',
			duration: '1 Semester',
			type: 'Exchange',
			description:
				'Georgia Tech, located in Atlanta, USA, is a top-ranked public research university known for its leadership in engineering, computing, and technology innovation. Founded in 1885, Georgia Tech has a long history of pioneering research in computer science, robotics, aerospace, and cybersecurity. The university fosters a dynamic entrepreneurial ecosystem and is a key contributor to technological advancements and workforce development in the southeastern United States and worldwide.',
		},
	]

	chunkedProjects: MobilityProject[][] = []

	ngOnInit() {
		for (const project of this.projects) {
			const index = this.projects.indexOf(project)
			this.projects[index].id = index
			this.isVisible.push(false)
		}
		this.chunkedProjects = this.chunkProjects(3)
	}

	chunkProjects(chunkSize: number): MobilityProject[][] {
		const chunks = []
		for (let i = 0; i < this.projects.length; i += chunkSize)
			chunks.push(this.projects.slice(i, i + chunkSize))

		return chunks
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
