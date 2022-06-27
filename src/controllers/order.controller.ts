import {
    Controller,
    Delete,
    Get,
    Post,
    Param,
    Body,
} from '@nestjs/common';
import {OrderService} from "../services/order.service";
import {Order} from "../models/Order";

@Controller('auth/orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}
    /**
     * An endpoint to get all orders
     */
    @Get()
    getAll(): Promise<Order[]> {
        return this.orderService.getAll();
    }
    /**
     * An endpoint to create a new order
     */
    //todo: implementation of creation new order
    @Post()
    add(@Body() order: Order): Promise<void> {
        return this.orderService.add(order);
    }
    /**
     * An endpoint to delete order
     */
    @Delete(':id')
    delete(@Param('id') id: string): Promise<void> {
        return this.orderService.delete(id);
    }
}
