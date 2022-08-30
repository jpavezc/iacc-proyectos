import { Controller, Get } from '@nestjs/common';
import { BackupService } from 'src/service/backup.service';


@Controller('backup')
export class BackupController {

  constructor(private backupService : BackupService) { }

  @Get('getBackup')
  getBackup(): any {
    return this.backupService.callBackup();
  }


}
