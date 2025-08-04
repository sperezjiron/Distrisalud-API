import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(private readonly dataSource: DataSource) {}

  async getProductosMasVendidos(): Promise<any[]> {
    // Ejecuta el procedimiento almacenado y devuelve los resultados
    const result = await this.dataSource.query('EXEC sp_ProductosMasVendidos');
    return result;
  }

  async getVentasPorMes(): Promise<any[]> {
    const result = await this.dataSource.query('EXEC sp_VentasPorMes');
    return result;
  }

  async getClientesFrecuentes(): Promise<any[]> {
    const result = await this.dataSource.query('EXEC sp_ClientesFrecuentes');
    return result;
  }

  async getProductosConBajoStock(): Promise<any[]> {
    const result = await this.dataSource.query('EXEC sp_ProductosBajoStock');
    return result;
  }

  async getPedidosPendientes(): Promise<any[]> {
    const result = await this.dataSource.query('EXEC sp_PedidosPendientes');
    return result;
  }

  async getResumenDiarioVentas(): Promise<any[]> {
    const result = await this.dataSource.query('EXEC sp_ResumenDiarioVentas');
    return result;
  }

}
