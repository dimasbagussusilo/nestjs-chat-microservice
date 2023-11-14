import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument, UserDocument } from "@app/common";
import { SchemaTypes } from "mongoose";

@Schema({ collection: "user-chats", versionKey: false })
export class UserChatDocument extends AbstractDocument {
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: "users",
  })
  user_id: string;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: "chats",
  })
  chat_id: string;
}

export const UserChatSchema = SchemaFactory.createForClass(UserChatDocument);
