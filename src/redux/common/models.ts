export interface HttpResponse<T> {
  data: T;
}

export interface BaseResponse {
  status?: number;
}

export interface ResultSet<T> {
  total_record: number;
  result: [T];
}
