import { Injectable } from '@angular/core';
import { Article } from './../structures/article.structure';
import { DictionaryKey } from './../structures/dictionary-key.structure';

@Injectable()
export class ArticleService {
	public currentArticle: Article = null;

	defineWord(wordId: number, dictionaryKey: DictionaryKey) {	
		this.currentArticle.definedWords.set(wordId, dictionaryKey);
	}

	undefineWord(wordId: number) {
		this.currentArticle.definedWords.remove(wordId);
	}
}
