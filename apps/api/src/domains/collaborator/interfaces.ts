import { Request, Response } from 'express';
import { FilterQuery } from 'mongoose';

import { PaginationParams } from "@/types";
import { ICollaborator, CollaboratorDocument, CollaboratorListResponse } from "@nifty/server-lib/models/collaborator";
interface ICollaboratorController {

}

interface ICollaboratorService {
  findCollaboratorById(id: string): Promise<CollaboratorDocument | null>;
  findCollaboratorByDirectoryIdAndUserId(directoryId: string, userId: string): Promise<CollaboratorDocument | null>;
  paginateCollaborators(condition: FilterQuery<CollaboratorDocument>, query: PaginationParams): Promise<Partial<CollaboratorListResponse>>;
  createCollaborator(createdBy: string, data: Partial<ICollaborator>): Promise<CollaboratorDocument>;
}

export { ICollaborator, ICollaboratorController, ICollaboratorService };