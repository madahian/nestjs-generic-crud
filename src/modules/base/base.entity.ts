import { PrimaryGeneratedColumn } from 'typeorm';
// import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  // @ApiModelPropertyOptional()
  public id: number;
}
