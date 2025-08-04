// reports.controller.ts
import { Controller, Get } from '@nestjs/common';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('ventas-por-mes')
  getVentasPorMes() {
    return this.reportsService.getVentasPorMes();
  }

  @Get('clientes-frecuentes')
  getClientesFrecuentes() {
    return this.reportsService.getClientesFrecuentes();
  }

  @Get('productos-bajo-stock')
  getProductosConBajoStock() {
    return this.reportsService.getProductosConBajoStock();
  }

  @Get('pedidos-pendientes')
  getPedidosPendientes() {
    return this.reportsService.getPedidosPendientes();
  }

  @Get('resumen-diario')
  getResumenDiarioVentas() {
    return this.reportsService.getResumenDiarioVentas();
  }

  @Get('productos-mas-vendidos')
  getProductosMasVendidos() {
    return this.reportsService.getProductosMasVendidos();
  }
  }
