import { ApiProperty } from '@nestjs/swagger';

export class BacIndivuduDTO {
  // 375...
  @ApiProperty()
  public id: number;

  @ApiProperty()
  public identifiant: string;

  @ApiProperty()
  public dateNaissance: string;

  @ApiProperty()
  public nomArabe: string;

  @ApiProperty()
  public nomLatin: string;

  @ApiProperty()
  public prenomArabe: string;

  @ApiProperty()
  public prenomLatin: string;

  @ApiProperty()
  public lieuNaissance: string;

  @ApiProperty()
  public lieuNaissanceArabe: string;

  @ApiProperty()
  public photo: string;

  @ApiProperty({
    nullable: true,
  })
  public email: string;

  @ApiProperty()
  public idCarde: string;
}
