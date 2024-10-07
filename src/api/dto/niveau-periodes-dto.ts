import { ApiProperty } from '@nestjs/swagger';

export class NiveauPeriodesDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public code: string;

  @ApiProperty()
  public libelleLongLt: string;

  @ApiProperty()
  public libelleLongAr: string;

  @ApiProperty({ nullable: true })
  public libelleCourtLt: string;

  @ApiProperty({ nullable: true })
  public libelleCourtAr: string;

  @ApiProperty()
  public rang: number;

  @ApiProperty()
  public credit: number;

  @ApiProperty({ nullable: true })
  public refCodePeriodicite: string;

  @ApiProperty()
  public rangNiveau: number;

  @ApiProperty({ nullable: true })
  public refCodePeriode: string;

  @ApiProperty()
  public libelleLongFrNiveau: string;

  @ApiProperty()
  public libelleLongFrCycle: string;

  @ApiProperty({ nullable: true })
  public ncPeriodeId: string;

  @ApiProperty({ nullable: true })
  public ncPeriodeCode: string;

  @ApiProperty({ nullable: true })
  public ncPeriodeLibelle: string;
}
