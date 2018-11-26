export function createModel(schema) {
  if (typeof schema !== 'object') {
    throw new Error('invalid schema');
  }
  
  return function(data) {
    const result = {};
    
    for (let key in data) {
      if (data.hasOwnProperty(key) && schema.hasOwnProperty(key)) {
        let value = data[key];
        let type = schema[key];
        
        if (type === Array && Array.isArray(value)) {
          result[key] = value;
        } else if (type === String && typeof value === 'string') {
          result[key] = value;
        } else if (type === Number && typeof value === 'number') {
          result[key] = value;
        }
      }
    }
    
    return result;
  }
}
