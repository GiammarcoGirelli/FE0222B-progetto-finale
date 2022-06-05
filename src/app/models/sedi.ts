import { ComuneApi } from "./comune-api";
import { ProvinciaApi } from "./provincia-api";

export class Sedi {
  id!: number;
  via!: string;
  civico!: string;
  cap!: string;
  localita!: string;
  comune: ComuneApi = new ComuneApi();
  provincia: ProvinciaApi = new ProvinciaApi();
}
