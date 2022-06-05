import { SedeApi } from "./sede-api";

export class ClientiApi {
  email!: string;
  id!: string;
  partitaIva!: string;
  ragioneSociale!: string;
  tipoCliente!: string;
  pec!: string;
  nomeContatto!: string;
  cognomeContatto!: string;
  telefonoContatto!: string;
  telefono!: string;
  emailContatto!: string;
  indirizzoSedeOperativa: SedeApi = new SedeApi();
  indirizzoSedeLegale: SedeApi = new SedeApi();
  dataInserimento!: string;
  dataUltimoContatto !:string;
  data!: string;

}

export enum TipoCliente {
  SPA,
  SRL
}
