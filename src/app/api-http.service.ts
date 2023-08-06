import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import axios from 'axios';
@Injectable()
export class ApiService {
    constructor(
        // // Angular Modules 
        private http: HttpClient
    ) { }
    getQuestion(thread:any) {
        debugger
        console.log(thread,"lkjasldkjsalkdjs")
        return this.http.get("http://172.22.12.150/CMSBOAPI/QuestionBank/GetQuestionBank?Tredcode="+thread);
    }
    getThreads() {
        debugger
        return this.http.get("http://172.22.12.150/CMSBOAPI/QuestionBank/GetTred");
    }
    SubmitQuestion(data:any){
        console.log(data,"creation")
        return this.http.post("http://172.22.12.150/CMSBOAPI/QuestionBank/CreateQuestionBank",data)
    }
    EditQuestion(data:any){
        console.log(data,"Edit")
        return this.http.post("http://172.22.12.150/CMSBOAPI/QuestionBank/UpdateQuestionBank",data)
    }
    DeleteQuestion(data:any){
        console.log(data,"Delete")
        return this.http.post("http://172.22.12.150/CMSBOAPI/QuestionBank/DeleteQuestion",data)
    }
    // public post(url: string, data: any, options?: any) {
    //     return this.http.post(url, data, options);
    // }
    // public put(url: string, data: any, options?: any) {
    //     return this.http.put(url, data, options);
    // }
    // public delete(url: string, options?: any) {
    //     return this.http.delete(url, options);
    // }
    // getTableValue(){
    //     return axios.get('https://jsonplaceholder.typicode.com/todos/',{headers:{}})
    // }
}
