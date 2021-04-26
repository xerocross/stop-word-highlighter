import { Component, OnInit } from '@angular/core';
import { Word } from "../class/word"




@Component({
  selector: 'app-stop-word-editor',
  templateUrl: './stop-word-editor.component.html',
  styleUrls: ['./stop-word-editor.component.scss']
})
export class StopWordEditorComponent implements OnInit {

  constructor() { }

  bufferText : string = "";
  bufferTextWords : string[] = [];
  bufferTextWords2 : Word[] = [];
  stopWordsText : string = "";

  initStopWords : string[] = ["he", "him", "his", 
  "she", "her", "hers","they","them", 
  "theirs"];

  initCommonExtraSymbols : Set<string> = new Set([".", "?", "\"", "'", "!", ","])

  stopWordSet : Set<string> = new Set();

  get previewTextWords () : string {
    let previewString = "";
    for (let word of this.bufferTextWords2) {
      previewString += word.originalPresentation;
      previewString += " ";
    }
    return previewString;
  }

  get previewHTML () : string {
    let previewHTML = "";
    for (let word of this.bufferTextWords2) {
      if (this.stopWordSet.has(word.baseWord)) {
        previewHTML += "<span class=\"stop-word\">&nbsp;" + word.originalPresentation +  "&nbsp;</span>";
      } else {
        previewHTML += word.originalPresentation;
      }
      
      previewHTML += " ";
    }
    return previewHTML;
  }


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

  handleTextChange(newbufferText: string){
    this.parseMainText(newbufferText);
  }



  parseMainText(newbufferText : string) : void {
    const re = /\s+/
    let bufferWordList : string[] = newbufferText.split(re);

    let bufferWordList2 : Word[] = [];
    for (let i = 0; i < bufferWordList.length; i++) {
        

        let originalWord = bufferWordList[i];
        let baseWord = originalWord;
        while (this.initCommonExtraSymbols.has(baseWord.charAt(0))) {
          baseWord = baseWord.substring(1);
        }
        while (this.initCommonExtraSymbols.has(baseWord.charAt(baseWord.length-1))) {
          baseWord = baseWord.substring(0,baseWord.length-1)
        }
        baseWord = baseWord.toLowerCase();
        let word = new Word(originalWord, baseWord);

        bufferWordList[i] = originalWord;
        bufferWordList2[i] = word;
    }
    this.bufferTextWords = bufferWordList;
    this.bufferTextWords2 = bufferWordList2;
    console.log("buffer words",this.bufferTextWords);
  }

  handleStopWordsChange(stopWordText: string) {
    const re = /\s*(?:,|$)\s*/
    let newList = stopWordText.split(re);
    this.stopWordSet = new Set();
    for (let word of newList) {
      let originalStopWord = word;
      let baseWord = originalStopWord.toLowerCase();
      this.stopWordSet.add(baseWord);
    }
    console.log("this.stopWordSet", this.stopWordSet)
  }

}
