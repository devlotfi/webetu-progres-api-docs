import { ApiProperty } from '@nestjs/swagger';

export class EtablissementIdParams {
  @ApiProperty()
  public etablissementId: string;
}
