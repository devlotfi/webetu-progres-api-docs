import { ApiProperty } from '@nestjs/swagger';
import { BilanUeDTO } from './bilan-ue-dto';

export class BilanPeriodeDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public type: number;

  @ApiProperty()
  public periodeId: number;

  @ApiProperty()
  public periodeLibelleFr: string;

  @ApiProperty()
  public periodeLibelleAr: string;

  @ApiProperty({ type: [BilanUeDTO] })
  public bilanUes: BilanUeDTO[];

  @ApiProperty()
  public moyenne: number;

  @ApiProperty()
  public moyenneSn: number;

  @ApiProperty()
  public credit: number;

  @ApiProperty()
  public creditObtenu: number;

  @ApiProperty()
  public creditAcquis: number;

  @ApiProperty()
  public annuel: boolean;

  @ApiProperty()
  public cycleLibelleLongLt: string;

  @ApiProperty()
  public niveauCode: string;

  @ApiProperty()
  public niveauRang: number;

  @ApiProperty()
  public niveauLibelleLongLt: string;

  @ApiProperty()
  public niveauLibelleLongAr: string;

  @ApiProperty()
  public totalAquis: number;

  @ApiProperty()
  public effectif: number;

  @ApiProperty()
  public coefficient: number;
}
