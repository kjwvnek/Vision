import { createModel } from '@utils/model'

const schema = {
  id: String,
  email: String,
  nickname: String,
  phone: String,
  fields: Array,
  mentees: Array,
  mentors: Array,
  summary: String,
  description: String
};

const User = createModel(schema);

export default User
