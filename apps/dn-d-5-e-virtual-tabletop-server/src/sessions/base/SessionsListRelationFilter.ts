/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SessionsWhereInput } from "./SessionsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SessionsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SessionsWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionsWhereInput)
  @IsOptional()
  @Field(() => SessionsWhereInput, {
    nullable: true,
  })
  every?: SessionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionsWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionsWhereInput)
  @IsOptional()
  @Field(() => SessionsWhereInput, {
    nullable: true,
  })
  some?: SessionsWhereInput;

  @ApiProperty({
    required: false,
    type: () => SessionsWhereInput,
  })
  @ValidateNested()
  @Type(() => SessionsWhereInput)
  @IsOptional()
  @Field(() => SessionsWhereInput, {
    nullable: true,
  })
  none?: SessionsWhereInput;
}
export { SessionsListRelationFilter as SessionsListRelationFilter };