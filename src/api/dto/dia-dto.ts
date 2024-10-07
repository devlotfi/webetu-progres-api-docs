import { ApiProperty } from '@nestjs/swagger';

export class DiaDTO {
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public numeroInscription: string;

  @ApiProperty()
  public anneeAcademiqueId: number;

  @ApiProperty()
  public anneeAcademiqueCode: string;

  @ApiProperty()
  public situationId: number;

  @ApiProperty()
  public dossierEtudiantId: number;

  @ApiProperty()
  public numeroMatricule: string;

  @ApiProperty()
  public ouvertureOffreFormationId: number;

  @ApiProperty()
  public refCodeCycle: string;

  @ApiProperty()
  public refLibelleCycle: string;

  @ApiProperty()
  public refLibelleCycleAr: string;

  @ApiProperty()
  public ofIdDomaine: number;

  @ApiProperty()
  public ofCodeDomaine: string;

  @ApiProperty()
  public ofLlDomaine: string;

  @ApiProperty()
  public ofLlDomaineArabe: string;

  @ApiProperty()
  public ofIdFiliere: number;

  @ApiProperty()
  public ofCodeFiliere: string;

  @ApiProperty()
  public ofLlFiliereArabe: string;

  @ApiProperty()
  public ofLlFiliere: string;

  @ApiProperty({ required: false })
  public ofIdSpecialite: number;

  @ApiProperty({ required: false })
  public ofCodeSpecialite: string;

  @ApiProperty({ required: false })
  public ofLlSpecialiteArabe: string;

  @ApiProperty({ required: false })
  public ofLlSpecialite: string;

  @ApiProperty()
  public individuId: number;

  @ApiProperty()
  public nin: string;

  @ApiProperty()
  public individuNomArabe: string;

  @ApiProperty()
  public individuNomLatin: string;

  @ApiProperty()
  public individuPrenomArabe: string;

  @ApiProperty()
  public individuPrenomLatin: string;

  @ApiProperty()
  public individuDateNaissance: string;

  @ApiProperty()
  public individuLieuNaissance: string;

  @ApiProperty()
  public individuLieuNaissanceArabe: string;

  @ApiProperty()
  public refEtablissementId: number;

  @ApiProperty()
  public refCodeEtablissement: string;

  @ApiProperty()
  public llEtablissementArabe: string;

  @ApiProperty()
  public llEtablissementLatin: string;

  @ApiProperty()
  public moyenneBac: number;

  @ApiProperty()
  public lastMoyenne: number;

  @ApiProperty()
  public photo: string;

  @ApiProperty()
  public cycleId: number;

  @ApiProperty()
  public cycleCode: string;

  @ApiProperty()
  public cycleLibelleLongLt: string;

  @ApiProperty()
  public niveauId: number;

  @ApiProperty()
  public niveauCode: string;

  @ApiProperty()
  public niveauRang: number;

  @ApiProperty()
  public niveauLibelleLongLt: string;

  @ApiProperty()
  public niveauLibelleLongAr: string;

  @ApiProperty({ required: false })
  public fraisInscriptionPaye: boolean;

  @ApiProperty({ required: false })
  public transportPaye: boolean;
}
