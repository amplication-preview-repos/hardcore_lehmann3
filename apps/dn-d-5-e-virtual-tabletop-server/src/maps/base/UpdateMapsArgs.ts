/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MapsWhereUniqueInput } from "./MapsWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { MapsUpdateInput } from "./MapsUpdateInput";

@ArgsType()
class UpdateMapsArgs {
  @ApiProperty({
    required: true,
    type: () => MapsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MapsWhereUniqueInput)
  @Field(() => MapsWhereUniqueInput, { nullable: false })
  where!: MapsWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => MapsUpdateInput,
  })
  @ValidateNested()
  @Type(() => MapsUpdateInput)
  @Field(() => MapsUpdateInput, { nullable: false })
  data!: MapsUpdateInput;
}

export { UpdateMapsArgs as UpdateMapsArgs };