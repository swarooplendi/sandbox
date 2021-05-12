import { Component } from "@angular/core";
import { FreeapiService } from "./freeapi.service";
import { Post } from "../app/posts";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "assignment";
  // allPost: any;
  allPosts: Post[] = [];

  constructor(private freeAPIService: FreeapiService) {
    //this.freeAPIService.getAllPosts().subscribe(data => {console.warn(data)})
  }
  ngOnInit() {
    this.freeAPIService
      .getAllPosts()
      .subscribe((data) => (this.allPosts = data));
    //     this.allPost = Post;
    //      this.allPosts = this.allPost;
  }
}
