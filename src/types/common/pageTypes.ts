import { QueryOptions } from '@/constants/index';
export interface pageType {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export interface dashboardPageType {
  searchParams?: { [QueryOptions.Id]: string; [QueryOptions.BuildingName]: string };
}
