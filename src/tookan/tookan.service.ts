import { Injectable } from '@nestjs/common';
import TookanAPI from 'tookan-api';
import { CreateTookanDto } from './dto/create-tookan.dto';
import { UpdateTookanDto } from './dto/update-tookan.dto';

export const TookanErrorCodes = {
  100: 'PARAMETER_MISSING',
  101: 'INVALID_KEY',
  200: 'ACTION_COMPLETE',
  201: 'SHOW_ERROR_MESSAGE',
  404: 'ERROR_IN_EXECUTION',
};

export const MetaData = {
  timezone: -60,
  meta_data: [
    {
      label: 'barode_custom_field',
      data: [
        {
          display_name: 'Barcode1',
          data: 'data1',
          is_verified: 0,
        },
        {
          display_name: 'Barcode2',
          data: 'data2',
          is_verified: 1,
        },
      ],
    },
    {
      label: 'charge',
      data: '1000',
    },
    {
      label: 'PackageType',
      data: 'A,B,C',
    },
    {
      label: 'DeliveryDetails',
      data: [
        [
          'car',
          '123',
          {
            lat: '22.44',
            lng: '34.4555',
            add: 'srilanka',
          },
        ],
        [
          'bike',
          '234',
          {
            lat: '22.44',
            lng: '34.4555',
            add: 'srilanka',
          },
        ],
        [
          'scooter',
          '456',
          {
            lat: '22.44',
            lng: '34.4555',
            add: 'srilanka',
          },
        ],
      ],
    },
  ],
  pickup_meta_data: '',
};

export const TookanJobStatuses = {
  0: 'Assigned',
  1: 'Started',
  2: 'Successful',
  3: 'Failed',
  4: 'InProgress/Arrived',
  6: 'Unassigned',
  7: 'Accepted/Acknowledged',
  8: 'Declined',
  9: 'Canceled',
  10: 'Deleted',
};
const TookanAccessToken = process.env.TOOKAN_ACCESS_TOKENa;

const TookanApiKey = process.env.TOOKAN_API_KEY;

const Tookan = new TookanAPI.Client({ api_key: TookanApiKey });

export default Tookan;

@Injectable()
export class TookanService {
  create(createTookanDto: CreateTookanDto) {
    return 'This action adds a new tookan';
  }

  findAll() {
    return `This action returns all tookan`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tookan`;
  }

  update(id: number, updateTookanDto: UpdateTookanDto) {
    return `This action updates a #${id} tookan`;
  }

  remove(id: number) {
    return `This action removes a #${id} tookan`;
  }
}
