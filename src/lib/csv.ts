import type {Order} from './orders'; import {fields,fmt} from './orders';
const safe=(v:string)=>/^[=+\-@]/.test(v)?"'"+v:v; const esc=(v:string)=>'"'+safe(v).replaceAll('"','""')+'"';
export function csv(rows:Order[]){return [fields.map(f=>esc(f.label)).join(','),...rows.map(o=>fields.map(f=>esc(fmt(o[f.key],f.key))).join(','))].join('\n')}
