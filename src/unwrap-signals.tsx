import { Signal } from '@preact/signals-core';

function isSignal<T>(value: unknown): value is Signal<T> {
  return typeof value === 'object' && value !== null && 'value' in value;
}

export function unwrap<T>(value: T | Signal<T>): T {
  return isSignal(value) ? value.value : value;
}
