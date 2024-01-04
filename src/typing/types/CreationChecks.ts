import ErrorCase from "../interface/ErrorCase";

export type NotFailedCheck = [false, null];
export type FailedCheck = [true, ErrorCase];
export type IsChecksFailed = NotFailedCheck | FailedCheck;
