const Types = require('mongoose').Types;
const User = require('../model/User');
const Field = require('../model/Field');

async function updateUser(id, email, phone, nickname, fields, summary, description) {
  let fieldIdArray;
  
  if (fields) {
    const prevUserInfo = await User.findById(id);
    const prevFieldIdArray = prevUserInfo.fields;
    
    // fields title => fields id
    const promiseArray = fields.reduce((promiseArray, field, index) => {
      promiseArray[index] = new Promise(async resolve => {
        const data = await Field.findOne({ title: field });
        let fieldId = data ? data.id : undefined;
        
        if (fieldId) {
          Field.updateOne({
            _id: Types.ObjectId(fieldId)
          }, {
            $addToSet: {
              users: [ id ]
            }
          });
        } else {
          const savedData = await (new Field({
            title: fields[index],
            users: [ id ]
          })).save();
          
          fieldId = savedData.id;
        }
        
        resolve(fieldId);
      });
    
      return promiseArray;
    }, []);
  
    fieldIdArray = await Promise.all(promiseArray);
    
    // remove user in field collection
    prevFieldIdArray.forEach(async prevFieldId => {
      if (fieldIdArray.indexOf(prevFieldId) === -1) {
        Field.updateOne({
          _id: Types.ObjectId(prevFieldId)
        }, {
          $pull: {
            users: id
          }
        }, (err) => {
          if (err) {
            throw err;
          }
        });
      }
    });
  
    // add user in field collection
    await fieldIdArray.forEach(async (fieldId, index) => {
      if (fieldId) {
        Field.updateOne({
          _id: Types.ObjectId(fieldId)
        }, {
          $addToSet: {
            users: [ id ]
          }
        }, (err) => {
          if (err) {
            throw err;
          }
        });
      } else {
        const field = new Field({
          title: fields[index],
          users: [ id ]
        });
      
        const savedData = await field.save();
        fieldIdArray[index] = savedData.id;
      }
    });
  } else {
    fieldIdArray = [];
  }
  
  // update user collection
  const data = await User.updateOne({
    _id: Types.ObjectId(id)
  }, {
    $set: {
      email,
      phone,
      nickname,
      fields: fieldIdArray.filter(fieldId => fieldId),
      summary,
      description
    }
  });
  
  return { data };
}

module.exports = updateUser;
