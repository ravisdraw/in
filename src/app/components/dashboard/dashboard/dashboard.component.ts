import { Component, OnInit } from '@angular/core';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  panelOpenState: boolean = false;

  filters: any[] = ['AI', 'Tech', 'Love'];
  instaID = '';
  instaUrl: SafeResourceUrl = '';
  posts: any[] = [];

  commonURL = 'https://www.instagram.com/p/Ctq5NkItF7A/embed/';

  constructor(
    private sanitizer: DomSanitizer,
    private clipboardService: ClipboardService
  ) {}

  ngOnInit(): void {}

  sanitizeUrl(): SafeResourceUrl {
    var url = `https://www.instagram.com/p/${this.instaID}/embed/`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  showInstagramPost(id: string) {
    this.instaID = id;
    this.instaUrl = this.sanitizeUrl();
    this.panelOpenState = true;
  }

  goToInstagramPost(url: string) {
    window.open(url, 'blank');
  }

  goToEditPost(obj: any) {
    // this.router.navigate(['/edit-post'], {queryParams: { data: JSON.stringify(obj)}});
  }

  copyToClipboard(url: string) {
    this.clipboardService.copy(url);
    alert('Post URL Copied to Clipboard!');
  }

  deletePost(id: string) {
    this.posts = this.posts.filter((item) => item.id !== id);
  }
}
