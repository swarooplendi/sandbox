import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Post } from "../app/posts";
@Injectable({
  providedIn: "root"
})
export class FreeapiService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts(): Observable<Post[]> {
    const url = "https://jsonplaceholder.typicode.com/posts";
    return this.httpClient.get<Post[]>(url);
  }
}
