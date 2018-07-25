export function objectsDeepNotEqualComparison(obj1, obj2) {
  const twoObjectsAreNotEqual = JSON.stringify(obj1) !== JSON.stringify(obj2);
  return twoObjectsAreNotEqual;
}

export function assert(condition, message) {
  if (!condition) {
    const errorMessage = message || 'Assertion failed';

    if (typeof Error !== 'undefined') {
      throw new Error(errorMessage);
    }
    throw errorMessage; // Fallback
  }
}
