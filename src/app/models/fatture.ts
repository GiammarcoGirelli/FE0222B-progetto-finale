import { ClientiApi } from "./clienti-api";

export class Fatture {
  id!: number;
  data!: string;
  numero!: number;
  anno!: number;
  importo!: number;
  stato!: {
    id: number;
    nome: string;
  };
  cliente!: ClientiApi;
}

