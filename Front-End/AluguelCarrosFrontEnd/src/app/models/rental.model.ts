export interface Rental {
  id?: number;             // Opcional na criação, obrigatório na atualização
  carId: number;           // ID do carro
  customerId: number;      // ID do cliente
  dailyRate: number;       // Valor diário
  daysRented: number;      // Dias alugados
  rentalDate: string;      // Data do aluguel (em formato ISO string)
}