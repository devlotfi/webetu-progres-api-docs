import { ApiProperty } from '@nestjs/swagger';

export class BilanMcDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public bilanUeId: number;

  @ApiProperty()
  public bilanSessionId: number;

  @ApiProperty()
  public rattachementMcId: number;

  @ApiProperty()
  public mcLibelleFr: string;

  @ApiProperty()
  public mcLibelleAr: string;

  @ApiProperty()
  public mcCode: string;

  @ApiProperty()
  public coefficient: number;

  @ApiProperty()
  public credit: number;

  @ApiProperty()
  public creditObtenu: number;

  @ApiProperty()
  public moyenneGenerale: number;
}
