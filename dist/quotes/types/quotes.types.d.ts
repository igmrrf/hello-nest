import { CreateQuoteDto } from '../dto/create-quote.dto';
import { UpdateQuoteDto } from '../dto/update-quote.dto';
export interface ServerToClientMessages {
    onCreateQuote: (payload: CreateQuoteDto) => void;
    onRandom: (payload: UpdateQuoteDto) => void;
}
