import { ApiProperty } from '@nestjs/swagger';
import { BilanMcDTO } from './bilan-mc-dto';

export class BilanUeDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public bilanSessionId: number;

  @ApiProperty()
  public repartitionUeId: number;

  @ApiProperty()
  public ueLibelleFr: string;

  @ApiProperty()
  public ueCode: string;

  @ApiProperty()
  public ueType: string;

  @ApiProperty()
  public moyenne: number;

  @ApiProperty()
  public coefficient: number;

  @ApiProperty()
  public credit: number;

  @ApiProperty()
  public creditObtenu: number;

  @ApiProperty()
  public creditAcquis: number;

  @ApiProperty()
  public ueNatureLcFr: string;

  @ApiProperty()
  public ueNatureLcAr: string;

  @ApiProperty()
  public ueNatureCode: string;

  @ApiProperty({ type: [BilanMcDTO] })
  public bilanMcs: BilanMcDTO[];

  @ApiProperty()
  public ueNoteObtention: number;

  @ApiProperty()
  public ueAcquis: boolean;

  @ApiProperty()
  public totalAquis: number;

  @ApiProperty()
  public effectif: number;
}
