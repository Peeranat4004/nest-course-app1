import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperService } from './shared/global-helper/global-helper.service';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { ChatModule } from './chat/chat.module';
import { OrderModule } from './order/order.module';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProductModule,
    UtilityModule,
    GlobalHelperModule,
    ChatModule,
    OrderModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, GlobalHelperService, UserService],
})
export class AppModule {}
