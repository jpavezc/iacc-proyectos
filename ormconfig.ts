import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";


export const ormconfig: SqlServerConnectionOptions = {
    type: 'mssql',
    host: 'testsqldatabaseiacc.database.windows.net',
    port: 1433,
    username: 'iacc',
    password: 'root1234.',
    database: 'iaccdb',
    synchronize: true,
  };
  
  export default ormconfig;