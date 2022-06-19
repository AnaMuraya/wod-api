const DB = require("./db.json");

//get a specific member
const getMember = (memberId) => {
  try {
    const member = DB.members.find((member) => member.id === memberId);
    if (!member) {
      throw { status: 404, message: `Member of id ${memberId} not found` };
    }
    return member;
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

module.exports = {
  getMember,
};
