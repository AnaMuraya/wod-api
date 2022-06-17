const Member = require("../database/Member");

//get the specific member
const getMember = (memberId) => {
  try {
    const member = Member.getMember(memberId);
    return member;
  } catch (err) {
    throw { status: err?.status || 500, message: err?.message || err };
  }
};

module.exports = {
  getMember,
};
