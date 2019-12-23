import http from './http';

import Vehicle from '~/models/Vehicle';

export async function getVehicle(url: string): Promise<Vehicle> {
  const { data } = await http.get(url);
  return data;
}
