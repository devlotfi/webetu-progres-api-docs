import { ApiProperty } from '@nestjs/swagger';

export class GroupeDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public groupePedagogiqueId: number;

  @ApiProperty()
  public nomGroupePedagogique: string;

  @ApiProperty({ required: false })
  public nomSection: string;

  @ApiProperty()
  public dateAffectation: string;

  @ApiProperty()
  public periodeId: number;

  @ApiProperty()
  public periodeCode: string;

  @ApiProperty()
  public periodeLibelleLongLt: string;
}
