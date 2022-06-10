import {Breeds} from "./dogs-view/dogs.model";

export interface DogsResponseInterface {
  message:Breeds,
  status: 'success' | 'error'
}

