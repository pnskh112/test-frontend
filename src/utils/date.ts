import dayjs, { type Dayjs } from "dayjs";
import "dayjs/locale/ja";
import timezone from "dayjs/plugin/timezone";

export const TIME_ZONE = "Asia/Tokyo";

dayjs.locale("ja");

dayjs.extend(timezone);
dayjs.tz.setDefault(TIME_ZONE);

const dateFormat = "YYYY年MM月DD日（ddd）";

export const todayString = (): string => {
  return dayjs().format(dateFormat);
};

export const today = (): Dayjs => {
  return dayjs().startOf("day");
};

export const toDayjsFromISOString = (str: string): Dayjs => {
  return dayjs(str);
};
