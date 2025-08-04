import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './api/Usuarios/users.module';
import { ProductsModule } from './api/Productos/products.module'; 
import { PromotionsModule } from './api/Promociones/promotions.module'; 
import { OrdersModule } from './api/Pedidos/orders.module'; 
import { CustomersModule } from './api/Clientes/customers.module';
import { AdminsModule } from './api/Admin/admins.module';
import { CategoryModule } from './api/Categoria/category.module';
import { RolModule } from './api/Roles/rol.module';
import { DetallePedidoModule } from './api/Detalles/detallepedido.module';  
import { PaymentsModule } from './api/Pagos/payments.module'; 
import { MetodosModule } from './api/Metodo/metodos.module';
import { BitacoraModule } from './api/Bitacora/bitacora.module';
import { PromocionAplicadaModule } from './api/PromoAplicada/promocion-aplicada.module';  
import { AuthModule } from './api/auth/auth.module';
import { ReportsModule } from './api/Reportes/reports.module';

@Module({
  imports: [

     TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME, 
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      options: {
        encrypt: true,
        trustServerCertificate: true, 
       },
     }),
    UsersModule,
    ProductsModule,
    PromotionsModule,
    OrdersModule,
    CustomersModule,
    AdminsModule,
    CategoryModule,
    RolModule,
    DetallePedidoModule,
    PaymentsModule,
    MetodosModule,
    BitacoraModule,
    PromocionAplicadaModule,
    AuthModule, // Ensure AuthModule is imported
    ReportsModule, // Import the ReportsModule
  ],
})
export class AppModule {}
