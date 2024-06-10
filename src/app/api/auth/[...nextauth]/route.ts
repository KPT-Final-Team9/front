import { handlers } from '@/auth';

const { GET: GETHandler, POST: POSTHandler } = handlers;

export { GETHandler as GET, POSTHandler as POST };
