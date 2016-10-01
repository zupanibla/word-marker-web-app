import { Component, Input } from '@angular/core';

@Component({
	selector: 'word-card',
	template: `
		<span class="word">{{data.text}}</span>
		<span class="pronunciation">[{{data.pronunciation}}]</span>
		<span class="definition">{{data.definition}}</span>
	`,
	styleUrls: ['word-card.component.style.sass']
})
export class WordCardComponent {
	@Input() data: WordCardData;
}

interface WordCardData {
	word: string;
	pronunciation: string;
	definition: string;
}
