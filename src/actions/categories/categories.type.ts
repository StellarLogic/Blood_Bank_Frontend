export interface CategoriesResponse {
  message: string;
  data: Datum[];
  metadata: null;
  status: null;
  action: null;
  signature: null;
  type: string;
  id: null;
  ok: boolean;
}

export interface Datum {
  id: string;
  name: string;
  description: null;
}
