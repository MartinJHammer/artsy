import {Model, model, property} from '@loopback/repository';

@model()
export class Achievement extends Model {
  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Achievement>) {
    super(data);
  }
}

export interface AchievementRelations {
  // describe navigational properties here
}

export type AchievementWithRelations = Achievement & AchievementRelations;
