import { ApiProperty } from '@nestjs/swagger';
import { BilanUeDTO } from './bilan-ue-dto';

export class BilanAnnuelDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public type: number;

  @ApiProperty({ type: [BilanUeDTO] })
  public bilanUes: BilanUeDTO[];

  @ApiProperty()
  public typeDecisionLibelleFr: string;

  @ApiProperty()
  public typeDecisionLibelleAr: string;

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
  public cumulCreditPrecedent: number;

  @ApiProperty()
  public annuel: boolean;

  @ApiProperty()
  public niveauRang: number;

  @ApiProperty()
  public totalAquis: number;

  @ApiProperty()
  public effectif: number;

  @ApiProperty()
  public coefficient: number;
}
