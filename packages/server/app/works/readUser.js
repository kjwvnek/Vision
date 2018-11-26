const User = require('../model/User');
const Field = require('../model/Field');

async function readUser(id) {
  const data = await User.findById(id);
  
  const promiseArray = data.fields.reduce((promiseArray, fieldId, index) => {
    promiseArray[index] = new Promise(async resolve => {
      let data = await Field.findById(fieldId);
      
      resolve(data.title);
    });
    
    return promiseArray;
  }, []);
  
  const fieldTitleArray = await Promise.all(promiseArray);
  
  return {
    id: data.id,
    email: data.email,
    nickname: data.nickname,
    phone: data.phone,
    fields: fieldTitleArray,
    summary: data.summary,
    description: data.description,
    mentees: data.mentees,
    mentors: data.mentors
  };
}

module.exports = readUser;
