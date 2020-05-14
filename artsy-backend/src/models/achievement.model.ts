import {Entity, model, property} from '@loopback/repository';

@model()
export class Achievement extends Entity {
  @property({
    id: true,
    description: 'The unique identifier for an achievement',
  })
  id: string;

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
