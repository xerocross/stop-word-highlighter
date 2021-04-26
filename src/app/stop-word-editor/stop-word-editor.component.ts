import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stop-word-editor',
  templateUrl: './stop-word-editor.component.html',
  styleUrls: ['./stop-word-editor.component.scss']
})
export class StopWordEditorComponent implements OnInit {

  constructor() { }

  bufferText : string = "";
  stopWordsText : string = "";

  initStopWords : string[] = ["he", "him", "his", 
  "she", "her", "hers","they","them", 
  "theirs"];
  stopWordSet : Set<string> = new Set();


  ngOnInit(): void {
    for (let word of this.initStopWords) {
      this.stopWordSet.add(word);
    }
    this.stopWordsText = this.parseStopWords();
  }

  private parseStopWords() {
    let arr = Array.from(this.stopWordSet);
    console.log("arr", arr);
    return arr.join(", ");
  }


  get stopWordsForPrint() : string {
    return this.parseStopWords();
  }



  handleTextChange(text: string){
    
  }

  handleStopWordsChange(text: string) {
    const re = /\s*(?:,|$)\s*/
    let array : string[] = this.stopWordsText.split(re);
    this.stopWordSet = new Set();
    for (let word of array) {
      this.stopWordSet.add(word);
    }
  }

}
