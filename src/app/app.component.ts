import { Component, OnInit } from '@angular/core';
import { Constants } from './Constant';
import { ApiService } from './api-http.service';
import '@angular/localize/init';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent {
//   title = 'angularproject';
// }

export class AppComponent implements OnInit {
  title = Constants.TitleOfSite;
  QuestionData: any;
  collectionSize: any;
  page = 1;
  pageSize: any;
  currentRate = 8;
  threadOption: any;
  ShowForm = false;
  threadSelected: any;
  SelectedQuestion: any;
 
  DeleteForm=new FormGroup({
    QBMQBI_ID: new FormControl(''),
    IsActive:new FormControl('')
  })

  EditQuestionForm = new FormGroup({
    QBMQB_QUESTION: new FormControl(''),
    QBMQB_ANSWER: new FormControl(''),
    QBMQB_WEIGHTAGE: new FormControl(''),
    DBTred_code: new FormControl(''),
    CREATEDBY: new FormControl(''),
    CREATEDBYID: new FormControl(''),
    QBMQBI_ID:new FormControl(''),
  });

  QuestionForm = new FormGroup({
    QBMQB_QUESTION: new FormControl(''),
    QBMQB_ANSWER: new FormControl(''),
    QBMQB_WEIGHTAGE: new FormControl(''),
    DBTred_code: new FormControl(''),
    CREATEDBY: new FormControl(''),
    CREATEDBYID: new FormControl(''),
  });
  constructor(private Api: ApiService) {
    console.log()
  }

  ngOnInit(): void {

    this.Api.getThreads().subscribe((data) => {
      this.threadOption = data
      this.threadSelected = this.threadOption.treds[0].dbTred_code
      this.Api.getQuestion(this.threadSelected).subscribe((data) => {
        this.QuestionData = data;
        this.collectionSize = this.QuestionData.questions.length
        this.pageSize = 5
      })
    })


    
    // this.threadOption = {
    //   "status": 200,
    //   "message": "Success",
    //   "treds": [
    //     {
    //       "dbTred_code": "ABD1",
    //       "dbTred": 18
    //     },
    //     {
    //       "dbTred_code": "ABD2",
    //       "dbTred": 18
    //     },
    //     {
    //       "dbTred_code": "ABD3",
    //       "dbTred": 18
    //     },
    //     {
    //       "dbTred_code": "ABD4",
    //       "dbTred": 18
    //     },
    //     {
    //       "dbTred_code": "ABD5",
    //       "dbTred": 18
    //     },
    //     {
    //       "dbTred_code": "ABD6",
    //       "dbTred": 18
    //     }
    //   ],
    //   "tredCount": 1
    // }
    // this.threadSelected = this.threadOption.treds[0].dbTred_code

    // this.QuestionData = {
    //   "status": 200,
    //   "message": "Success",
    //   "questions": [
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": false,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     }, {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     },
    //     {
    //       "qbmqB_ID": 1,
    //       "qbmqbI_ID": 1,
    //       "dbTred_code": "ABD1",
    //       "qbmqB_QUESTION": "QUESTION 1",
    //       "qbmqB_ANSWER": "q1 answer",
    //       "qbmqB_WEIGHTAGE": 5,
    //       "isactive": true,
    //       "createdby": "",
    //       "createdbyid": 0,
    //       "createddate": "2023-08-05T19:26:08.767",
    //       "updatedby": "",
    //       "updatedid": 0,
    //       "updateddate": "1900-01-01T00:00:00",
    //       "deletedby": "",
    //       "deletedid": 0,
    //       "deleteddate": "1900-01-01T00:00:00"
    //     }
    //   ],
    //   "questionBankCount": 7
    // }
    // this.collectionSize = this.QuestionData.questions.length
    // this.pageSize = 5


  }

  onChange(event: any) {
    this.threadSelected = event.target.value
    this.Api.getQuestion(this.threadSelected).subscribe((data) => {
      this.QuestionData = data;
      this.collectionSize = this.QuestionData.questions.length
      this.pageSize = 5
    })
  }

  EditRow(val: any) {
    this.SelectedQuestion = val.qbmqbI_ID
    this.ShowForm = true
    this.QuestionForm.patchValue({
      DBTred_code: val.dbTred_code,
      QBMQB_QUESTION: val.qbmqB_QUESTION,
      QBMQB_ANSWER: val.qbmqB_ANSWER,
      QBMQB_WEIGHTAGE: val.qbmqB_WEIGHTAGE,
    })
  }

  SubmitForm() {
    if (this.SelectedQuestion == 0 || this.SelectedQuestion == undefined) {
      this.QuestionForm.value.DBTred_code = this.threadSelected
      this.QuestionForm.value.CREATEDBY = "0"
      this.Api.SubmitQuestion(this.QuestionForm.value).subscribe((data1) => {
        this.Api.getQuestion(this.threadSelected).subscribe((data) => {
          this.QuestionData = data;
          this.collectionSize = this.QuestionData.questions.length
          this.pageSize = 5
        })
      })
    }
    else {
      this.EditQuestionForm.patchValue({
        DBTred_code: this.threadSelected,
        QBMQB_QUESTION:  this.QuestionForm.value.QBMQB_QUESTION,
        QBMQB_ANSWER: this.QuestionForm.value.QBMQB_ANSWER,
        QBMQB_WEIGHTAGE: this.QuestionForm.value.QBMQB_WEIGHTAGE,
        QBMQBI_ID:this.SelectedQuestion
      })
      this.Api.EditQuestion(this.EditQuestionForm.value).subscribe((data1) => {
        this.Api.getQuestion(this.threadSelected).subscribe((data) => {
          this.QuestionData = data;
          this.collectionSize = this.QuestionData.questions.length
          this.pageSize = 5
        })
      })
    }
  }

  CreateRow() {
    this.SelectedQuestion = 0
    this.QuestionForm.patchValue({
      QBMQB_QUESTION: "",
      QBMQB_ANSWER: "",
      QBMQB_WEIGHTAGE: "",
    })
    this.ShowForm = true
  }

  HideForm() {
    this.SelectedQuestion = 0
    this.ShowForm = false
  }

  DeleteRow(val: any) {
    this.DeleteForm.patchValue({
      QBMQBI_ID:val,
      IsActive:"0"
    })
    this.Api.DeleteQuestion(this.DeleteForm.value).subscribe((data1) => {
      this.Api.getQuestion(this.threadSelected).subscribe((data) => {
        this.QuestionData = data;
        this.collectionSize = this.QuestionData.questions.length
        this.pageSize = 5
      })
    })
  }
}
