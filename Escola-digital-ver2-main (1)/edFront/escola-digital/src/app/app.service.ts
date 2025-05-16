import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
    helloWorld() {
        return this.http
        .get(
            'http://localhost:3000'
        );
    }
}
