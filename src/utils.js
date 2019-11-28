export const activeServices = services =>
  services.filter(service => service.active);

export const serviceNames = services => services.map(service => service.name);

export const totalCostOfServices = services =>
  services.reduce((total, service) => (total += service.monthlyCost), 0);

export const formatCentsToDollars = cents => (cents / 100).toFixed(2);

// Reference: https://exploringjs.com/impatient-js/ch_sets.html#missing-set-operations
export const arrayIntersection = (arrayA, arrayB) => {
  const a = new Set(arrayA);
  const b = new Set(arrayB);
  const intersection = new Set([...a].filter(x => b.has(x)));
  return Array.from(intersection);
};
