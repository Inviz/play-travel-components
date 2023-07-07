'use client';
import * as FEAAS from '@sitecore-feaas/clientside/react';
import Slider from './Slider';
export default function ClientsideComponents() {
  return FEAAS.linkComponents([Promise.resolve(Slider)]) && <></>;
}
