export interface Ticket {
  id: number;
  typeError: string;
  descriptionError: string;
  reportedBy: string;
  date: string;
  state: string;
  project?: string;
}
