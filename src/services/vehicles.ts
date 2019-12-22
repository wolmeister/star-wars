import Vehicle from '~/models/Vehicle';

import vehicles from '~/_mocks/vehicles';

export async function getVehicles(urls?: string): Promise<Vehicle[]> {
  if (!urls) {
    return vehicles;
  }
  return vehicles.filter(v => urls.indexOf(v.url) >= -1);
}

export async function getVehicle(url: string): Promise<Vehicle | null> {
  return vehicles.find(v => v.url === url) || null;
}
