import { ApiProperty } from '@nestjs/swagger';

export class AnneeAcademiqueDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public code: string;

  @ApiProperty({
    nullable: true,
  })
  public libelle: string;
}
