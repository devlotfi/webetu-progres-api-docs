import { ApiProperty } from '@nestjs/swagger';

export class BacNotesDTO {
  @ApiProperty()
  public note: number;

  @ApiProperty()
  public refCodeMatiereLibelleFr: string;
}
