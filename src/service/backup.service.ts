import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class BackupService{

    constructor(private readonly httpService: HttpService) {

    }

    callBackup(){
        return this.httpService.get('http://localhost:8080/');
    }


}
