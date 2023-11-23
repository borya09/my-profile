export interface Job {
  company: string;
  role: string;
  description: string | undefined;
  from: Date;
  to: Date | undefined;
}
