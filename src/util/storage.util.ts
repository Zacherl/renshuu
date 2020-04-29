export enum LocalStorageKey {
  renshuuDarkTheme = "renshuuDarkTheme",
  renshuuStudent = "renshuuStudent"
}

function toKebabCase(key: string): string {
  return key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

export function removeKey(key: LocalStorageKey): void {
  localStorage.removeItem(toKebabCase(key));
}

export function getString<T extends string>(
  key: LocalStorageKey
): T | undefined {
  return localStorage.getItem(toKebabCase(key)) as T;
}

export function setString(key: LocalStorageKey, value: string): void {
  localStorage.setItem(toKebabCase(key), value);
}

export function getItem<T>(key: LocalStorageKey): T | undefined;
export function getItem<T>(key: LocalStorageKey, fallback: T): T;
export function getItem<T>(key: LocalStorageKey, fallback?: T): T | undefined {
  const value = getString(key);
  return value ? JSON.parse(value) : fallback;
}

export function setItem<T>(key: LocalStorageKey, value: T): void {
  setString(key, JSON.stringify(value));
}

export function getNumber(key: LocalStorageKey): number {
  return Number(getString(key));
}

export function setNumber(key: LocalStorageKey, value: number): void {
  setString(key, value.toString());
}

export function getBoolean(key: LocalStorageKey): boolean {
  return getString(key) === "true";
}

export function setBoolean(key: LocalStorageKey, value: boolean): void {
  setString(key, value.toString());
}

export function isKeySet(key: LocalStorageKey): boolean {
  return getBoolean(key);
}

export function setKey(key: LocalStorageKey): void {
  setBoolean(key, true);
}
