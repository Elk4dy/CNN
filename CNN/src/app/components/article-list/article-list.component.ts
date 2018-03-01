import { Component, OnInit } from '@angular/core';

// Services
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public articles: any = [];
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.articleService.getAllArticles().subscribe(articles => {
      this.articles = articles.items;
    });
  }

  viewMore() {
    // hide view more button after showing the hidden row ====>
    const hideButton = <HTMLElement>document.querySelector('.view-more');
    hideButton.style.display = 'none';

    // show hidden row by press button view more ====>

    const hiddenRow = <HTMLElement>document.querySelector('#hidden-row');
    hiddenRow.style.display = 'flex';
  }
}
