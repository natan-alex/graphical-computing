export function throwIfNull(item: unknown, message = "The item cannot be null") {
  if (item === null || item === undefined) {
    throw new Error(message);
  }
}
