import { generateId } from "../Utils/generateId.js"
export class Player {

/**
 * 
 * @param {{name: string, score: number}} data 
 */

  constructor(data) {
    this.name = data.name;
    this.score = data.score;
  }
}

 