import type { AppResponse } from '@nifty/api/domains/dto';
import { PaginationParams } from '@nifty/api/types';
import type { Insertable, Directory, Updateable } from '@nifty/common/types';

export type GetDirectoryRequestParam = Pick<Directory, 'id'>;
export type GetDirectoryResponse = AppResponse<Directory>;

export type GetDirectoriesRequestQuery = PaginationParams<'directory'>;
export type GetDirectoriesResponse = AppResponse<Directory[]>;

export type CreateDirectoryRequestBody = Pick<
  Insertable<Directory>,
  'alias' | 'name' | 'credits' | 'parentId'
>;
export type CreateDirectoryResponse = AppResponse<Directory>;

export type DeleteDirectoryRequestParam = number;
export type DeleteDirectoryResponse = AppResponse<{
  id: Pick<Directory, 'id'>;
}>;
