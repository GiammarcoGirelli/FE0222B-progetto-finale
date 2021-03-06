import { ComuneApi } from "./comune-api";
import { ProvinciaApi } from "./provincia-api";

export class SedeApi {
  id!: number;
  via!: string;
  civico!: string;
  cap!: string;
  localalit√†!: string;
  comune: ComuneApi = new ComuneApi();
  provincia: ProvinciaApi = new ProvinciaApi();
}
