export enum DateFormat {
  MDY = 'MM/DD/YYYY',
  DMY = 'DD/MM/YYYY',
  YDM = 'YYYY/DD/MM',
  YMD = 'YYYY/MM/DD',
}

export interface Format {
  id: number;
  name: DateFormat;
}
