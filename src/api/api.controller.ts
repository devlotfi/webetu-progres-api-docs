import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiForbiddenResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { AuthenticationDTO } from 'src/api/dto/authenthication-dto';
import { AuthenticationResponseDTO } from 'src/api/dto/authenthication-response-dto';
import { BacIndivuduDTO } from 'src/api/dto/bac-individu-dto';
import { ConfigurationDTO } from 'src/api/dto/configuration-dto';
import { BacNotesDTO } from './dto/bac-notes-dto';
import { DiaDTO } from './dto/dia-dto';
import { NiveauPeriodesDTO } from './dto/niveau-periodes-dto';
import { AnneeAcademiqueDTO } from './dto/annee-academique-dto';
import { GroupeDTO } from './dto/groupe-dto';
import { UserUUIDParams } from './params/user-uuid-params';
import { EtablissementIdParams } from './params/etablissement-id-params';
import { UserUUIDDiaParams } from './params/user-uuid-dia-params';
import { UserUUIDAnneeAcademiqueParams } from './params/user-uuid-annee-academique-params';
import { NiveauParams } from './params/niveau-params';
import { DiaParams } from './params/dia-params';
import { BilanAnnuelDTO } from './dto/bilan-annuel-dto';
import { BilanPeriodeDTO } from './dto/bilan-periode-dto';

@Controller('api')
@ApiTags('Api')
export class ApiController {
  @Get('infos/configuration')
  @ApiOkResponse({
    type: () => ConfigurationDTO,
  })
  public configuration() {}

  @Post('authentication/v1//')
  @ApiOperation({
    description:
      'Sign in to the app with username and password. The username is the year of the BAC exam followed by the the BAC id (example 2021########), and the password is the code that came with the BAC notes report',
  })
  @ApiOkResponse({
    type: () => AuthenticationResponseDTO,
  })
  @ApiForbiddenResponse()
  public authenthication(@Body() authenthicationDto: AuthenticationDTO) {}

  @Get('infos/image/:userUUID')
  @ApiOperation({
    description: 'Gets the user image encoded as a Base64 String',
  })
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: () => String,
  })
  @ApiForbiddenResponse()
  public userImage(@Param() userParams: UserUUIDParams) {}

  @Get('infos/logoEtablissement/:etablissementId')
  @ApiOperation({
    description:
      'Gets the logo of the current university/school encoded as a Base64 String',
  })
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: () => String,
  })
  @ApiForbiddenResponse()
  public logoEtablissement(
    @Param() etablissementIdParams: EtablissementIdParams,
  ) {}

  @Get('infos/AnneeAcademiqueEncours')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: () => AnneeAcademiqueDTO,
  })
  @ApiForbiddenResponse()
  public anneeAcademique() {}

  @Get('infos/bac/:userUUID/individu')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: () => BacIndivuduDTO,
  })
  @ApiForbiddenResponse()
  public bacIndividu(@Param() userParams: UserUUIDParams) {}

  @Get('infos/bac/:userUUID/notes')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [BacNotesDTO],
  })
  @ApiForbiddenResponse()
  public bacNotes(@Param() userParams: UserUUIDParams) {}

  @Get('infos/bac/:userUUID/dias')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [DiaDTO],
  })
  @ApiForbiddenResponse()
  public bacDias(@Param() userParams: UserUUIDParams) {}

  // TODO: Add response definition
  @Get('infos/bac/:userUUID/demandesHebregement')
  @ApiSecurity('jwt-token')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  public bacDemandesHebergement(@Param() userParams: UserUUIDParams) {}

  @Get('infos/bac/:userUUID/anneeAcademique/:anneeAcademiqueId/dia')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: () => DiaDTO,
  })
  @ApiForbiddenResponse()
  public bacAnneeAcademiqueDia(
    @Param() userAnneeAcademiqueParams: UserUUIDAnneeAcademiqueParams,
  ) {}

  @Get('infos/niveau/:niveau/periodes')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [NiveauPeriodesDTO],
  })
  @ApiForbiddenResponse()
  public niveauPeriodes(@Param() niveauParams: NiveauParams) {}

  // TODO: Add response definition
  @Get('infos/dettes/:userUUID')
  @ApiSecurity('jwt-token')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  public dettesUser(@Param() userParams: UserUUIDParams) {}

  @Get('infos/dia/:diaId/groups')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [GroupeDTO],
  })
  @ApiForbiddenResponse()
  public bacDiaGroupes(@Param() diaParams: DiaParams) {}

  // TODO: Add response definition
  @Get('infos/seanceEmploi/inscription/:diaId')
  @ApiSecurity('jwt-token')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  public seanceEmploiInscription(@Param() diaParams: DiaParams) {}

  // TODO: Add response definition
  @Get('infos/demandeTransport/:userUUID/:diaId')
  @ApiSecurity('jwt-token')
  @ApiOkResponse()
  @ApiForbiddenResponse()
  public demandeTransportUserDia(@Param() userDiaParams: UserUUIDDiaParams) {}

  @Get('infos/bac/:userUUID/dia/:diaId/annuel/bilan')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [BilanAnnuelDTO],
  })
  @ApiForbiddenResponse()
  public bilanAnnuel(@Param() userDiaParams: UserUUIDDiaParams) {}

  @Get('infos/bac/:userUUID/dias/:diaId/periode/bilans')
  @ApiSecurity('jwt-token')
  @ApiOkResponse({
    type: [BilanPeriodeDTO],
  })
  @ApiForbiddenResponse()
  public bilanPeriode(@Param() userDiaParams: UserUUIDDiaParams) {}
}
