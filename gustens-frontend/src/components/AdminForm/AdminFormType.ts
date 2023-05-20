export type AdminFormType = {
  id: number;
  namn: string;
  ursprung: string;
  scoville: number;
  styckpris: number;
  antal: number;
};

export const defaultAdminForm = {
  id: 0,
  namn: "",
  ursprung: "",
  scoville: 0,
  styckpris: 0,
  antal: 0,
};
