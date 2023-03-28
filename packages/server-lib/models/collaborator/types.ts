import mongoose from "../../mongoose";
import Resource from '../../utils/types/resource';
import { ListResponse } from '../../utils/types/tsoa/list-response';

export interface ICollaborator extends Resource {
  created_by: string;
  user: string;
  permissions: string[];
}

export type CollaboratorDocument = mongoose.Document<string, object, ICollaborator>;

export type CollaboratorListResponse = ListResponse<CollaboratorDocument>