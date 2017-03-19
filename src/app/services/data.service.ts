import {Injectable} from '@angular/core';
import {SchoolData} from '../data/data.schooldata';

@Injectable()
export class DataService {

  constructor() {}

    getSchoolData() {
        return Promise.resolve(SchoolData);
    }

}
